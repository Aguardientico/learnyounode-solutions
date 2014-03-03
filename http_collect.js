var http = require('http');
var result = []
http.get(process.argv[2], function(response){
  response.setEncoding('utf-8');
  response.on("data", function(data){
    result.push(data);
  });
  response.on("end", function(){
    result = result.join('');
    console.log(result.length);
    console.log(result);
  });
});
