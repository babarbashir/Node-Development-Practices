var net = require('net');


var connection = net.createConnection({port: 8181, host: '127.0.0.1'}, function(){
	console.log('connected');
	this.write('hello server');

});

connection.on('data', function(data){

console.log('data: ' + data.toString());
});

connection.on('error', function(err){
	console.log('error: ' + err.toString());
});

connection.on('end', function(){ 
	console.log('Connection ends');
});


