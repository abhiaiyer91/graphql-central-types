import * as fs from 'fs';
import { Command } from '@oclif/command';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import * as path from 'path';

export default class MergeSchemas extends Command {
  static description =
    'merge all types from the Schemas directory and combine them into a single RootType.ts';

  static examples = [`$ types merge-schemas`];

  async run() {
    const SCHEMAS_ROOT_TYPE_PATH = path.resolve('./src/Schemas/');
    const COMBINED_ROOT_TYPE_PATH = path.resolve('./src/RootType.ts');
    const typesArray = fileLoader(SCHEMAS_ROOT_TYPE_PATH);

    const mergedRootTypes = mergeTypes(typesArray);

    const mergedRootTypeFileContent = `// ============================================================================
        // DO NOT EDIT.
        // The contents of this file are generated by merging types exported from
        // src/Schemas/index.js
        // ============================================================================
        export default \`\n${mergedRootTypes}\`;
        `;

    fs.writeFileSync(COMBINED_ROOT_TYPE_PATH, mergedRootTypeFileContent);
  }
}
