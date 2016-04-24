var fs = require('fs'),
file='./file.txt';


//file hidden async
fs.chmod(file, 4000, function(err){
	if(err) return;
});


//individual write


fs.chmod(file, 0200, function(err){
	if(err) return;
});

//individual execute
fs.chmod(file, 0100, function(err){
	if(err) return;
});


//individual write & execute

fs.chmod(file, 0300, function(err){
	if(err) return;
});


//change owner - root

fs.chown(file, 0 /*<Root>*/,0, function(err){
	if(err) return;
});



//change owner - diff user id

fs.chown(file, 1000 /*<Non Root>*/,1000, function(err){
	if(err) return;
});