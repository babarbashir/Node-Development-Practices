
//web socket client using node APIs

var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();
client.on('connectFailed', function(err){
	console.log(err);
});


client.on('connect', function(connection){
	console.log('hurray conneection');

	connection.on('error', function(err){
		console.log(err);
	});

	connection.on('close', function(){
		console.log('connection closed');
	});	

	connection.on('message', function(message){
		switch(message.type) {
			case 'utf8':
				console.log('utf8', message.utf8Data);
				break;
			default:
				console.log('default', JSON.stringify(message));
				break;
		} //end switch
	});


	connection.send('heyo');


});


client.connect('ws://localhost:8181','echo-protocol');



