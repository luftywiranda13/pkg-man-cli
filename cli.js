#!/usr/bin/env node
'use strict';

const meow = require('meow');
const pkgMan = require('pkg-man');

const cli = meow(
  `
  Usage
    $ pkg-man [path]

  Options
    -p, --preferred  Preferred package manager [Default: npm]

  Examples
    $ pkg-man
    $ pkg-man foo
    $ pkg-man bar
    $ pkg-man ../foo --preferred npm
    $ pkg-man ../foo/bar --preferred yarn
`,
  {
    flags: {
      preferred: {
        type: 'string',
        alias: 'p',
        default: 'npm',
      },
    },
  }
);

console.log(pkgMan({ cwd: cli.input[0], preferred: cli.flags.preferred }));
