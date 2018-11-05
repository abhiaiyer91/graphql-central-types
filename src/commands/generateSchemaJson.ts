import * as shelljs from 'shelljs';
import { Command } from '@oclif/command';

export default class GenerateSchemaJson extends Command {
  static description =
    'Generate a schema.json file in the queries folder based on the RootType';

  static examples = [`$ types generateSchemaJson`];

  async run() {
    const server = require(process.cwd() + '/MockServer/server').default;
    const DEFAULT_PORT = 1402;

    const serverInstance = server.listen(DEFAULT_PORT, () => {
      shelljs.exec(
        'npm run apollo-cli -- schema:download ./src/queries/schema.json --endpoint=http://localhost:1402/graphql',
        () => {
          return serverInstance.close();
        }
      );
    });
  }
}
