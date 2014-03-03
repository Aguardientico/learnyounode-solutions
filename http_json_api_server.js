var http = require('http');
var url = require('url');

var writeResponse = function(response, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(response));
}

var doParseTime = function(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

var doParseUnixtime = function(date) {
  return {
    unixtime: date.getTime()
  };
}

var badRequest = function(res) {
  res.writeHead(400);
  res.end('INVALID REQUEST');
}

var processRequest = function(req, res) {
  if (req.method != 'GET') {
    badRequest(res);
  }

  var reqPath = url.parse(req.url, true);
  var iso = reqPath.query.iso;
  if (!iso) {
    badRequest(res);
  }

  var date = new Date(iso);
  var response;
  if (reqPath.pathname == '/api/parsetime') {
    response = doParseTime(date);
  } else if (reqPath.pathname == '/api/unixtime') {
    response = doParseUnixtime(date);
  } else {
    badRequest(res);
    return
  }
  writeResponse(response, res);
}

var server = http.createServer(processRequest);
server.listen(process.argv[2]);
