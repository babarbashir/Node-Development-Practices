var cp = require('child_process'),
http = require('http');

var child = cp.fork('fork_spawn.js');




var server = http.createServer(function(req, res){

	res.write('hello world');

});

server.listen(8080);

child.send('hello');

child.send('server', server);

