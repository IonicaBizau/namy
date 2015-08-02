// Dependencies
var ReadJson = require("r-json");

/**
 * Namy
 * Gets the name of the exported function.
 *
 * @name Namy
 * @function
 * @param {String} input The path to the package.json, directory or the file.
 * @param {Function} callback The callback function.
 */
function Namy(input, callback) {
    if (/package.json$/.test(input)) {
        return ReadJson(input, function (err, data) {
            if (err) { return callback(err); }
            if (!data.main) {
                return callback(new Error("Cannot find the main field in package.json"));
            }
            Namy(data.main, callback);
        });
    }

    var path = null
      , isInCache = null
      , res = null
      , name = null
      ;

    try {
        path = require.resolve(input)
        isInCache = !!require.cache[path]
        // TODO Make this async
        res = require(input)
    } catch (err) {
        return callback(err);
    }

    if (typeof res === "function") {
        name = res.name || null;
    } else {
        return callback(new Error("The module does not export a function."));
    }

    if (!isInCache) {
        delete require.cache[path];
    }

    if (!name) {
        return callback(new Error("The function does not have a name."));
    }

    callback(null, name);
}

module.exports = Namy;
