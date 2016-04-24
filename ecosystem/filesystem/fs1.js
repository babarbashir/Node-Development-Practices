
var fs = require('fs');
var out;

console.log("this is the path: " + __dirname);



fs.realpath(__dirname, function(err, path){

	if(err) {
		console.log('error: ' + err);
		return;
	} else {
		console.log('real path: ' + path);
	}	
	

});


out = fs.realpathSync(__dirname);

console.log('realpath sync: ' + out);

fs.stat(__dirname, function(err, stat) {
	
	if(err) return;

	var isDir = false;

	fs.readdir(__dirname, function(err, contents){
		if(err) return;

		contents.forEach(function(f){
			console.log('contents: ' + f)
		});


	});



});
