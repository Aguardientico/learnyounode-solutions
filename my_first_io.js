var fs = require('fs');
var file = process.argv[2];
var buf = fs.readFileSync(file);
var str = buf.toString();
var lines = str.split('\n').length - 1;
console.log(lines);
