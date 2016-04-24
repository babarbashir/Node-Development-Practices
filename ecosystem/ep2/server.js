var net = require('net');

var server = net.createServer({allowHalfOpen: true}, function(connectionListener){

	console.log('Connected');
	console.log(this.address());

	//console.log('max connection: '+ this.maxConnections());

	//set maxConnections
	//this.maxConnections = 1;

	//check set maxConnections
	//console.log('max connection: '+ this.maxConnections());


	this.getConnections(function(err, count){

		if(err) {
			console.log('Error in connection');

		} else {
			console.log('Connections count: ' + count);
		}


	});

	connectionListener.on('end', function(){
		console.log('Disconnected');

	});


	connectionListener.on('error', function(err){
		console.log('Error' + err);
		
	});

	connectionListener.write('Hello\r\n');

});


server.on('error',function(err){

console.log('server error: ' + err);

});


server.on('data', function(data){

	console.log('data: ' + data);
});

//make server listen on a port 
server.listen(8181, '127.0.0.1', 12, function(){
	console.log('server listerning');
});

//for IPV 6
//server.listen(8181, '::1', 12, function(){
//	console.log('server listerning');
//});



