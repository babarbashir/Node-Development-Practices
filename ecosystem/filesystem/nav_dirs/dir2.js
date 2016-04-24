var fs = require('fs'),
args;

args = process.argv.splice(2);

args.forEach(function(arg){
	fs.rmdir(arg, function(err) {

		if(err) {
			handleError(err);
		}
	}); //remove dir

});


function handleError(err) {

	console.log(err);

	if(err.code ==='ENOENT') {
		console.log('Directory does not exists');
	} else if(err.code ==='ENOTEMPTY'){
		console.log('Directory is not empty');
	} else {
		console.log('Error occured while removing the directory');

	}
}