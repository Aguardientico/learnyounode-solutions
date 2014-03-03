var file_filter = require('./file_filter');
file_filter(process.argv[2], process.argv[3], function(err, fileList) {
  fileList.forEach(function(file) {
    console.log(file);
  });
});
