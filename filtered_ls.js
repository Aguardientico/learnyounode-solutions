var fs = require('fs');
var path = require ('path');
var dirname = process.argv[2];
var extension = '.' + process.argv[3];
fs.readdir(dirname, function(err, list) {
  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) == extension) {
      console.log(list[i]);
    }
  }
});
