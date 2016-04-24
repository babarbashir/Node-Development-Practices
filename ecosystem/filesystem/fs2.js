
var fs = require('fs');

var args;

args = process.argv.splice(2);

args.forEach(function(arg){



fs.realpath(arg, function(err, path){

	if(err) {
		console.log('error: ' + err);
		return;
	} else {
		console.log('real path: ' + path);
	}	
	

});


fs.stat(arg, function(err, stat) {
	if(err) return;

	fs.readdir(arg, function(err, contents) {
		if (err) return;

		contents.forEach(function(f){
			console.log('contents: ' + f);
		});
	})

});


});


