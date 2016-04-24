
//secure web server

var https =  require('https');
var fs = require('fs');

var options = {
	key: fs.readFileSync('private.pem'),
	cert: fs.readFileSync('certificate.pem')
};

var server = https.createServer(options, function(req,res) {

	res.writeHead(200);
	res.write('Hello Secured');
	res.end();
});

server.listen(8080);

