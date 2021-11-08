/**
 * locale plugin
 * This loads all finished templates and replaces instances of root folder names in urls with locale versions
 * e.g. The string "/user-manual (with leading quote) is replaces with "/en/user-manual
 * The locale is retrieved from the root directory of the file.
 * e.g. file: '/en/user-manual/index.md' has locale 'en'
 */

var path = require("path");
var fs = require("fs");
var handlebars = require("handlebars");

module.exports = function makePlugin() {
    return function (opts) {
        return function(files, metalsmith, done){
            for (var filename in files) {
                // Ensure Windows paths are converted to forward slashes as necessary
                var filenameForwardSlashes = filename.replace(/\\/g,"/");

                var locale = filenameForwardSlashes.split("/")[0];
                var dirs = ['user-manual', 'engine', 'error', 'getting-started', 'tutorials', 'search', 'shader-editor'];

                var data = files[filename];
                var text = data.contents;

                // replace all instances of '"/user-manual' (etc) with '"/en/user-manual'
                for(var i = 0; i < dirs.length; ++i) {
                    var dir = dirs[i];
                    var re = new RegExp('\\"\\/' + dir, "g");
                    var substr = "\"\/" + locale + "/" + dir;

                    text = text.toString().replace(re, substr);
                }

                data.contents = Buffer.from(text);
            }
            done();
        };
    };
};
