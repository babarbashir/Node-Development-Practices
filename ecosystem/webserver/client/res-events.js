

var http = require('http'),
server=http.createServer(),
connections=0;

server.on('request',function(req, res){
	console.log('request');
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	res.end('ending');
});


server.on('connection', function(socket){
	connections++;
	console.log('connections cound: ' + connections);
});

server.on('checkContinue', function(req, res){
	console.log('checkContinue');
	res.writeContinue();
});


server.on('upgrade', function(socket){
	console.log('upgrade');
	socket.write('HTTP/1.1 101 Web Socket Protocol Handshack\r\n' +
	'Upgrade: Web Socket\r\n'+
	'Connection: Upgrade \r\n'+
	'Sec-WebSocket-Accept: s3pPLMBiTxaQ9kyGzzhZRbK+xOo=\r\n'+
	'Sec-WebSocket-Protocol: chat\r\n'+
	'\r\n');
	socket.pipe(socket);

});


