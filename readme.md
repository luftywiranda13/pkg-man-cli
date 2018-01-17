# pkg-man-cli

> Detect which package manager that should be used

[![Package Version](https://img.shields.io/npm/v/pkg-man-cli.svg?style=flat-square)](https://www.npmjs.com/package/pkg-man-cli)
[![Downloads Status](https://img.shields.io/npm/dm/pkg-man-cli.svg?style=flat-square)](https://npm-stat.com/charts.html?package=pkg-man-cli&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/pkg-man-cli/master.svg?style=flat-square)](https://travis-ci.org/luftywiranda13/pkg-man-cli)

## Installation

```sh
npm install --global pkg-man-cli
```

## Usage

```sh
$ pkg-man --help

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
```

## Related

* [pkg-man](https://github.com/luftywiranda13/pkg-man) － API for this module

## License

MIT &copy; [Lufty Wiranda](https://www.luftywiranda.com)
