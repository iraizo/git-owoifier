owoifier
========

owoifies your git commit messages

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/owoifier.svg)](https://npmjs.org/package/owoifier)
[![Downloads/week](https://img.shields.io/npm/dw/owoifier.svg)](https://npmjs.org/package/owoifier)
[![License](https://img.shields.io/npm/l/owoifier.svg)](https://github.com/iraizo/https://github.com/iraizo/git-owoifier/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g owoifier
$ owoifier COMMAND
running command...
$ owoifier (-v|--version|version)
owoifier/1.0.0 win32-x64 node-v12.16.3
$ owoifier --help [COMMAND]
USAGE
  $ owoifier COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`owoifier commit [MESSAGE]`](#owoifier-commit-message)
* [`owoifier help [COMMAND]`](#owoifier-help-command)

## `owoifier commit [MESSAGE]`

git commit

```
USAGE
  $ owoifier commit [MESSAGE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ owoifier --commit xyz
```

_See code: [src\commands\commit.ts](https://github.com/iraizo/git-owoifier/blob/v1.0.0/src\commands\commit.ts)_

## `owoifier help [COMMAND]`

display help for owoifier

```
USAGE
  $ owoifier help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src\commands\help.ts)_
<!-- commandsstop -->
