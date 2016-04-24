//building a web socket server router (APIs) with websocket-node (a third party tool) for developing websockets.

var http = require('http'),
fs = require('fs'),
url = require('url'),
WebSocketServer = require('websocket').server,
WebSocketRouter = require('websocket').router;

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

var router = new WebSocketRouter();
//attach to ws server
router.attachServer(wsserver);

router.mount('*', 'echo-protocol', function(request){
	console.log('mounted to the echo event');
	var conn = request.accept(request.origin);
	conn.on('message', function(message){
		console.log('routed message');
	});// conn.on.message

	conn.send('hey');
}); //end router.mount echo-protocol


//diff protocol
router.mount('*', 'update-protocol', function(request){
	console.log('mounted to the update protocol');
	var conn = request.accept(request.origin);
	conn.on('message', function(message){
		console.log('update message');
	});// conn.on.message

	conn.send('hey');
}); //end router.mount



