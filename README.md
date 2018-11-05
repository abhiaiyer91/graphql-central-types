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
graphql-central-types/0.0.0 darwin-x64 node-v8.10.0
$ types --help [COMMAND]
USAGE
  $ types COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`types hello [FILE]`](#types-hello-file)
* [`types help [COMMAND]`](#types-help-command)

## `types hello [FILE]`

describe the command here

```
USAGE
  $ types hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ types hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/abhiaiyer91/graphql-central-types/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
