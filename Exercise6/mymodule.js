var fs = require('fs');
var path = require('path');

module.exports = function(filePath, extension, callback) {
  fs.readdir(filePath, function (err, files) {
    if (err) { callback(err, []); return ; }

    var result = [];
    files.forEach(function(file){
      if (path.extname(file).substring(1) === extension) {
        result.push(file);
      }
    });
    callback(null, result);
  });
};
