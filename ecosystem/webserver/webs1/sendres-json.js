//create a simple response page

var http = require('http');

var server = http.createServer(function(req, res){

	res.setHeader("Content-Type","application/json");

	res.writeHead(202, 'json content');
	res.write('{name: "Babar", Age: 32, country: "Pakistan"}');
	res.end();


});


server.listen(8080);