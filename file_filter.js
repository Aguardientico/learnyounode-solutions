module.exports = function (dirname, extension, callback) {
  var fs = require('fs');
  var path = require ('path');

  var fileList = [];
  fs.readdir(dirname, function(err, list) {
    if (err) {
      return callback(err);
    }
    extension = '.' + extension
    for (var i = 0; i < list.length; i++) {
      if (path.extname(list[i]) == extension) {
        fileList.push(list[i]);
      }
    }
    callback(null, fileList);
  });
}
