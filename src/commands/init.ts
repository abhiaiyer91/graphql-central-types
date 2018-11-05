import { Command } from '@oclif/command';
import * as path from 'path';
import * as fs from 'fs';
import * as Handlebars from 'handlebars';

function generateFromTemplate(
  inputPath: string,
  outputDir: string,
  outputFilename?: string
) {
  fs.readdirSync(inputPath).forEach(file => {
    const sourcePath = path.join(inputPath, file);
    const stats = fs.statSync(sourcePath);

    if (stats.isDirectory()) {
      const subdir = path.join(outputDir, file);
      if (!fs.existsSync(subdir)) {
        fs.mkdirSync(subdir);
      }
      return generateFromTemplate(sourcePath, subdir);
    }

    const templateSource = fs.readFileSync(sourcePath, { encoding: 'utf8' });
    const template = Handlebars.compile(templateSource);
    const content = template({});
    const outputPath = path.join(outputDir, outputFilename || file);

    fs.writeFileSync(outputPath, content);
  });
}

export default class Init extends Command {
  static description = 'Scaffold the directory structure for the types repo';

  static examples = [`$ types init`];

  async run() {
    const newServiceTemplateDir = path.join(__dirname, '../templates/base');

    const serviceDir = process.cwd();

    generateFromTemplate(newServiceTemplateDir, serviceDir);
  }
}
