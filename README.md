
# `$ namy`

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/namy.svg)](https://www.npmjs.com/package/namy) [![Downloads](https://img.shields.io/npm/dt/namy.svg)](https://www.npmjs.com/package/namy) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Gets the name of the exported function.

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g namy
```


Then, run `namy --help` and see what the CLI tool can do.


```
$ namy --help
Usage: namy [options]

Options:
  -p, --path <path>  The path to the project or a file.
  -h, --help         Displays this help.
  -v, --version      Displays version information.

Examples:
  namy # searches in the current directory
  namy -p path/to/some/file.js
  namy -p path/to/project

Documentation can be found at https://github.com/IonicaBizau/namy
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save namy
```



```js
// Dependencies
var Namy = require("namy");

// Get the exported function name
Namy(__dirname + "/foo", function (err, name) {
    console.log(err || name);
    // => Foo
});
```

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
