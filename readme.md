# pkg-man-cli

[![Greenkeeper badge](https://badges.greenkeeper.io/luftywiranda13/pkg-man-cli.svg)](https://greenkeeper.io/)

[![Package Version](https://img.shields.io/npm/v/pkg-man-cli.svg)](https://www.npmjs.com/package/pkg-man-cli)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/pkg-man-cli/master.svg)](https://travis-ci.org/luftywiranda13/pkg-man-cli)
[![Downloads Status](https://img.shields.io/npm/dm/pkg-man-cli.svg)](https://npm-stat.com/charts.html?package=pkg-man-cli&from=2016-04-01)

Detect which package manager that should be used

## Installation

```sh
npm install --global pkg-man-cli
```

## Usage

```
$ pkg-man --help

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
```

## Related

- [pkg-man](https://github.com/luftywiranda13/pkg-man) - API for this module
- [del-nm-cli](https://github.com/luftywiranda13/del-nm-cli) - Delete `node_modules` and lockfile (if any)

## License

MIT &copy; [Lufty Wiranda](https://instagram.com/luftywiranda13)
