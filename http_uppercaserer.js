var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res){
  if (req.method != 'POST') {
    return res.end('INVALID REQUEST');
  }
  req.pipe(map(function(chunck){return chunck.toString().toUpperCase()})).pipe(res);
});
server.listen(process.argv[2]);
