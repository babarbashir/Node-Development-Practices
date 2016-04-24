//white board app using node.js

var WebSocketServer = require('websocket').server,
http = require('http'),
sox ={},
idx = 0;

var server = http.createServer(function(req, res) {
	res.writeHead(404);
	res.end();

});

server.listen(8080);

var ws = new WebSocketServer({
	httpServer: server,
	autoAcceptConnections: false
});

function originIsAllowed(origin) {
	return true;
}


var getNextId = (function(){
	var idx = 0;
	return function() {
		return ++idx;
	}
})();


ws.on('request', function(request){
	if(originIsAllowed(request.origin)){
		request.reject();
		console.log('rejected - origin' + request.origin);

	}

	var connection = request.accept('draw-protocol', request.origin);
	connection.socketid = getNextId();
	connection.sendUTF("socketid_"+connection.socketid);
	console.log('connection.socketid', connection.socketid);
	sox[connection.socketid] = connection;

	connection.on('message', function(message){
		if(message.type === 'utf8') {
			sendToAll(JSON.parse(message.utf8Data));
		} else if(message.type === 'binary') {
			connection.sendBytes(message.binaryData);
		}
	});

	connection.on('close', function(reasonCode, description){
		delete sox[connection.socketid];
	});

});



function sendToAll(drawEvt, type) {

	for(var socket in sox) {
		if(type === 'utf8' && drawEvt.socketid !== socket){
			sox[socket].sendUTF(JSON.stringify(drawEvt));
		}
	}
}














