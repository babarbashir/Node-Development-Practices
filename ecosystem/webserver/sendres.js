//create a simple response page

var http = require('http');

var server = http.createServer(function(req, res){

	res.setHeader("Content-Type","text/html");

	res.writeHead(202, 'woot');
	res.write('<!doctype html>');
	res.write('<html><head>');
	res.write('<meta charset = "utf-8"><title>My Web Response</title></head>');
	res.write('<body><h3>This is easy</h3></body>');
	res.write('</html>');
	res.end();


});


server.listen(8080);