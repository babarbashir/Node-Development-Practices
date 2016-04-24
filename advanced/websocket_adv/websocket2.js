//building a web socket server with websocket-node (a third party tool for developing websockets.

var http = require('http'),
fs = require('fs'),
url = require('url'),
WebSocketServer = require('websocket').server;

var server = http.createServer(function(req, res){

	var urlParsed = url.parse(req.url,true,true);
	fs.readFile(urlParsed.path.split('/')[1], function(err, data){
		if(err) {
			res.statusCode = 404;
			res.end(http.STATUS_CODES[404]);
		} 

		res.statusCode =200;
		res.end(data);
	});
	
}).listen(8181);



var serverConfig = {
	httpServer : server,
	autoAcceptConnections: false
};

var wsserver = new WebSocketServer();

wsserver.mount(serverConfig);

wsserver.on('connect', function(connection){
	//console.log('connected');
	connection.send('yo connected, from server');
});

wsserver.on('request', function(req){
	if(req.requestedProtocols[0] === 'echo-protocol') {
		var connection = req.accept('echo-protocol', req.origin);
		connection.on('message', function(message){
			if(message.type='utf8'){
				var rt= JSON.parse(message.utf8Data);
				switch(rt.path){
					case 'route_a':
						console.log('do something on route_a');
						break;
					case 'route_b':
						console.log('route_b here', rt);
						break;
					default:
						console.log('something else gonna happen');
						break;

				} //end switch
			} else if(req.type === 'binary'){
					console.log(req.binaryData);
			} //end if
		}); // end connection.on('message')

		connection.on('close', function(reasonCode, description){
			console.log('connection closed', reasonCode, description);
		}); //end connection.on.close
	} else {
		console.log('protocol not accepted');
	} //end if for req.requestedProtocols[0] ==echo-protocol

});


wsserver.on('close', function(conn, reason, description){
	console.log('wsserver closing', reason, description);
});  // end wsserver.on.close








