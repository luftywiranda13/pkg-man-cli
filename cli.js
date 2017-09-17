#!/usr/bin/env node
'use strict';

const meow = require('meow');
const pkgMan = require('pkg-man');

const cli = meow(`
  Usage
    $ pkg-man <path>

  Options
    -d, --default  Default package manager if lockfile wasn't found

  Examples
    $ pkg-man
    $ pkg-man foo
    $ pkg-man bar
    $ pkg-man ../foo --default npm
    $ pkg-man ../foo/bar --default yarn
`,
  {
    string: ['default'],
    alias: {
      d: 'default'
    }
  }
);

console.log(pkgMan(cli.input[0], cli.flags));
