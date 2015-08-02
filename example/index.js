// Dependencies
var Namy = require("../lib");

// Get the exported function name
Namy(__dirname + "/foo", function (err, name) {
    console.log(err || name);
});
