//to be run as a worker daemon for node js builtin clustering example

var http = require('http');

var server = http.createServer(function(req, res){
	res.write('hello');
	res.end('nothing special from server');


});


server.listen(8181);
