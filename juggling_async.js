var http = require('http');

var results = new Array();
var complete = 0;

var getData = function(url) {
  results.push(new Array());
  var index = results.length - 1;
  http.get(url, function(response) {
    response.setEncoding('utf-8');
    response.on("data", function(data) {
      results[index].push(data);
    });
    response.on("end", function(){
      results[index] = results[index].join('');
      complete++;
      processResult();
    });
  });
}

var processResult = function() {
  if (complete == 3) {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  }
}

getData(process.argv[2]);
getData(process.argv[3]);
getData(process.argv[4]);
