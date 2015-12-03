# `$ namy` [![Support this project][donate-now]][paypal-donations]

Gets the name of the exported function.

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g namy
```

Then, run `namy --help` and see what the CLI tool can do.

```sh
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

## Example

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

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md