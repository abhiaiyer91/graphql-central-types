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
graphql-central-types/0.0.2 darwin-x64 node-v8.10.0
$ types --help [COMMAND]
USAGE
  $ types COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`types help [COMMAND]`](#types-help-command)
* [`types init`](#types-init)
* [`types mergeSchemas`](#types-merge-schemas)
* [`types schemaExports`](#types-schema-exports)

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

_See code: [src/commands/init.ts](https://github.com/abhiaiyer91/graphql-central-types/blob/v0.0.2/src/commands/init.ts)_

## `types mergeSchemas`

merge all types from the Schemas directory and combine them into a single RootType.ts

```
USAGE
  $ types mergeSchemas

EXAMPLE
  $ types merge-schemas
```

_See code: [src/commands/mergeSchemas.ts](https://github.com/abhiaiyer91/graphql-central-types/blob/v0.0.2/src/commands/mergeSchemas.ts)_

## `types schemaExports`

make all schema root types into an exportable file

```
USAGE
  $ types schemaExports

EXAMPLE
  $ types schemaExports
```

_See code: [src/commands/schemaExports.ts](https://github.com/abhiaiyer91/graphql-central-types/blob/v0.0.2/src/commands/schemaExports.ts)_
<!-- commandsstop -->
