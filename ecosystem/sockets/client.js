var net = require('net');
var socket = new net.Socket();

socket.connect(8181, '127.0.0.1');

socket.on('connect', function(){
	console.log('we are connected to: ' + this.remoteAddress);

	var obj = {
		name: 'babar',
		occupation : 'software engineer'
	};
	this.write(JSON.stringify(obj));
}); 


socket.on('error', function(err){
	console.log('error: ' + err);
	socket.destroy();
});
socket.on('data',function(data){
	console.log('from server: ' + data);

});


socket.setEncoding('utf-8');


socket.setTimeout(2e3, function(){
	console.log('timeout completed');
	var obj = {
		name: 'timeout',
		message: 'came from a timeout'
	};

	this.write(JSON.stringify(obj));
	
});