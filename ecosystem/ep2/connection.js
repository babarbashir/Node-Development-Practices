var net = require('net');

var connection = net.createConnection({port: 8181,host: '127.0.0.1'}, function(){

	console.log('connected');
});

connection.on('error',function(err){

	console.log(err);

});

connection.on('close', function(){
	console.log('connection closed');
});


connection.on('data', function(data){
	console.log('data is: ' + data);

});
