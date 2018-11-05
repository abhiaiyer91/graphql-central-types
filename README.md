graphql-central-types
=====================

CLI to generate a central types repository

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/graphql-central-types.svg)](https://npmjs.org/package/graphql-central-types)
[![Downloads/week](https://img.shields.io/npm/dw/graphql-central-types.svg)](https://npmjs.org/package/graphql-central-types)
[![License](https://img.shields.io/npm/l/graphql-central-types.svg)](https://github.com/abhiaiyer91/graphql-central-types/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g graphql-central-types
$ types COMMAND
running command...
$ types (-v|--version|version)
graphql-central-types/0.0.4 darwin-x64 node-v8.10.0
$ types --help [COMMAND]
USAGE
  $ types COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`types exportSchemas`](#types-export-schemas)
* [`types exportTypeDefs`](#types-export-type-defs)
* [`types generateSchemaJson`](#types-generate-schema-json)
* [`types help [COMMAND]`](#types-help-command)
* [`types init`](#types-init)
* [`types mergeSchemas`](#types-merge-schemas)

## `types exportSchemas`

make all schema root types into an exportable file

```
USAGE
  $ types exportSchemas

EXAMPLE
  $ types schemaExports
```

_See code: [src/commands/exportSchemas.ts](https://github.com/abhiaiyer91/graphql-central-types/blob/v0.0.4/src/commands/exportSchemas.ts)_

## `types exportTypeDefs`

Take all typeDefs and make them exportable

```
USAGE
  $ types exportTypeDefs

EXAMPLE
  $ types exportTypeDefs
```

_See code: [src/commands/exportTypeDefs.ts](https://github.com/abhiaiyer91/graphql-central-types/blob/v0.0.4/src/commands/exportTypeDefs.ts)_

## `types generateSchemaJson`

Generate a schema.json file in the queries folder based on the RootType

```
USAGE
  $ types generateSchemaJson

EXAMPLE
  $ types generateSchemaJson
```

_See code: [src/commands/generateSchemaJson.ts](https://github.com/abhiaiyer91/graphql-central-types/blob/v0.0.4/src/commands/generateSchemaJson.ts)_

## `types help [COMMAND]`

display help for types

```
USAGE
  $ types help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src/commands/help.ts)_

## `types init`

Scaffold the directory structure for the types repo

```
USAGE
  $ types init

EXAMPLE
  $ types init
```

_See code: [src/commands/init.ts](https://github.com/abhiaiyer91/graphql-central-types/blob/v0.0.4/src/commands/init.ts)_

## `types mergeSchemas`

merge all types from the Schemas directory and combine them into a single RootType.ts

```
USAGE
  $ types mergeSchemas

EXAMPLE
  $ types merge-schemas
```

_See code: [src/commands/mergeSchemas.ts](https://github.com/abhiaiyer91/graphql-central-types/blob/v0.0.4/src/commands/mergeSchemas.ts)_
<!-- commandsstop -->
