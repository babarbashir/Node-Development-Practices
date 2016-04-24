var net = require('net');

var server = net.createServer(connectionListener);

server.listen('8181', '127.0.0.1');

function connectionListener(conn){

	console.log('new client connected');

	conn.write('first hello>>>> ');


//handling readable
	conn.on('readable', function(){

		var data = JSON.parse(this.read());

		if (data && data.name){

			this.write('2nd hello:  ' + data.name);

		} //end if
	});


// handling eror

	conn.on('error', function(err){
		console.log(err);
	});	



}