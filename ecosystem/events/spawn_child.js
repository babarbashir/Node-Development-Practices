
var spawn = require('child_process').spawn,
pwd = spawn('pwd'),
ls = spawn('ls', ['-G']),
nd =spawn('node',['reducing_callback.js']);



pwd.stdout.setEncoding('utf8');

pwd.stdout.on('data', function(data){
	console.log('data: ' , data)
});

pwd.stderr.on('data', function(data){
	console.log('error data: ' , data)
});


pwd.stdout.on('close', function(){
	console.log('spawn closed');

});

//ls command
ls.stdout.setEncoding('utf8');

ls.stdout.on('data', function(data){
	console.log('ls data: ' , data)
});

/*
ls.stderr.on('data', function(data){
	console.log('error data: ' , data)
});


ls.stdout.on('close', function(){
	console.log('ls closed');

});

*/
//node process

nd.stdout.setEncoding('utf8');

nd.stdout.on('data', function(data){
	console.log('node process data: ' , data)
});

/*
nd.stderr.on('data', function(data){
	console.log('error data: ' , data)
});


nd.stdout.on('close', function(){
	console.log('node process closed');

});
*/

