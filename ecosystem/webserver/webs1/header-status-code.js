//handling status code and header


var http = require('http'), 
url = require('url');


var server = http.createServer(function(req, res) {
	if(req.headers) {
		console.log('request headers:   ' + req.headers);

	}

	var parsedUrl = url.parse(req.url);
	//console.log(parsedUrl.path);
	if(parsedUrl.path === '/manifest.webapp' && req.method ==='GET' ) {
		res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
		res.write('{ "name": "myApp" }');
		res.end();
	} else if(parsedUrl.path !== '/') {
		res.statusCode = 404;
		res.end('status code to display:  ' + http.STATUS_CODES[res.statusCode]);

	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('<h2>Normal Content</h2>');
	}

});

server.listen(8080);