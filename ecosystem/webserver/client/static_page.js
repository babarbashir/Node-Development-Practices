//serve status page

var http = require('http'),
fs = require('fs'),
path = require('path');

var contentTypes = {
'.htm': 'text/html',
'.html': 'text/html',
'.js': 'text/javascript',
'.json': 'application/json',
'.css': "text/css" 
};


var server = http.createServer(function(req, res){
	console.log(req.url);

	var fileStream = fs.createReadStream(req.url.split('/')[1]);
	fileStream.on('error', function(err){
		if(err.code==='ENOENT') {
			res.statusCode = 404;
			res.end(http.STATUS_CODES[404]);
		} else {
			res.statusCode = 500;
			res.end(http.STATUS_CODES[500]);
		} //end if


	});


var extension = path.extname(req.url);
var contentType = contentTypes[extension] || 'text/plain';
res.writeHead(200, {'Content-Type': contentType});

fileStream.pipe(res);

});

server.listen(8080);

