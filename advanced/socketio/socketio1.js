//socket io

var app = require('http').createServer(connectHandler),
io = require('socket.io').listen(app),
fs = require('fs');

app.listen(8080);

function connectHandler(req, res){

	fs.readFile(__dirname + '/chat_client.html', function(err, data){
		if(err) {
			res.writeHead(404);
			return res.end('error loading file');
		}  //end if readFile
		res.writeHead(200);
		
		res.writeHead('Access-Control-Allow-Origin', 'http://localhost:8080/');
    	res.writeHead('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    	res.writeHead('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');


		
		res.end(data);

	});


}

var members = [];

io.sockets.on('connection', function(socket){
	socket.on('joined', function(data){
		var mbr = data;
		members.push(mbr);
		socket.broadcast.emit('joined', data);
		console.log(data.name, 'joined the room');
	});

	socket.on('message', function(data){
		socket.broadcast.emit('message', data);

	}); //end message


	socket.on('disconnect', function(){
		for (var i=0; i<members.length; i++){
			if(members[i].id == socket.id) {
				socket.broadcast.emit('disconnected', {name: members[i].name});

			}
		}
	}); //disconnect
});







