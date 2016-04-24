//simple web server


var http = require('http');

var server = http.createServer(function(req, res){

	res.write('Hello Web Server');
	res.end();
});


server.listen(8080);

