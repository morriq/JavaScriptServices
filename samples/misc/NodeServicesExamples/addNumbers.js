var fs = require('fs');  // file system

module.exports = function (result) {
    var rstream = fs.createReadStream('./EmptyCSSFile.css');

/*
rstream.on("data", (d) => {
    result.stream.write(d);
});
rstream.on("end", () => {
    setTimeout(() => {

    result.stream.end();
    }, 10000);
});
*/

    rstream.pipe(result.stream);
};