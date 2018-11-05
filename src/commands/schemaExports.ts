import * as fs from 'fs';
import { Command } from '@oclif/command';
import * as glob from 'glob';
import { map, reduce } from 'lodash';
import * as path from 'path';
import * as shell from 'shelljs';

const SRC_DIR_NAME = 'src';
const SCHEMA_DIR_NAME = 'Schemas';
const ROOT_TYPE_FILE = 'index.ts';

const GENERATED_JS_FILE_HEADER = `
/******************************************************************************
*
* DO NOT EDIT THIS FILE.
*
* The contents of this file were generated by mergeSchemaExports.ts
*
******************************************************************************/
`;

function generateImportExportJsFile(exportList) {
  const fileContents = `${GENERATED_JS_FILE_HEADER}
  ${exportList}
`;
  return fileContents;
}

function generateTypeDefinitionsIndex(files) {
  const exportList = reduce(
    files,
    (memo, { name, content }) => {
      if (!!memo[name]) {
        return memo;
      }
      return {
        text: (memo.text += `export const ${name} = \`\n${content.trim()}\n\`;\n\n`),
        [name]: true
      };
    },
    { text: '' }
  );

  fs.writeFileSync(
    path.join(SRC_DIR_NAME, `${SCHEMA_DIR_NAME}/${ROOT_TYPE_FILE}`),
    generateImportExportJsFile(exportList.text)
  );
}

function readSchemaRootTypes() {
  const directory = path.join(SRC_DIR_NAME, SCHEMA_DIR_NAME);
  // get a list of all files recursively
  const files = glob.sync(`${directory}/**/*.graphql`);
  return map(files, filePath => {
    const { name } = path.parse(filePath);

    shell.sed('-i', /.*#\s*([^\n\r]*)/, '', filePath);

    const contents = fs.readFileSync(filePath, 'utf8');

    const withoutNewLines = contents.replace(/^\s*[\r\n]/gm, '');

    return {
      name,
      content: withoutNewLines
    };
  });
}

export default class SchemaExports extends Command {
  static description = 'make all schema root types into an exportable file';

  static examples = [`$ types schemaExports`];

  async run() {
    const types = readSchemaRootTypes();

    return generateTypeDefinitionsIndex(types);
  }
}
