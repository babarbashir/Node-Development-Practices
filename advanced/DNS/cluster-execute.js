var http = require('http');
http.createServer(function(req, res){
	console.log(req.url);
	res.writeHead(200);
	res.end('hello');

}).listen(8181);