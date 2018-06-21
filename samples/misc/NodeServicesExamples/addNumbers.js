var fs = require('fs');  // file system

module.exports = function (result) {
    var rstream = fs.createReadStream('./EmptyCSSFile.css');

    rstream.pipe(result.stream);

        // fs.readFile('./EmptyCSSFile.css', "utf8", function (err, content) {
        //    result(null, content);
        // });
};