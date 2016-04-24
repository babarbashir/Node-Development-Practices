var fs = require('fs'),
args;

args = process.argv.splice(2);

args.forEach(function(arg){
	fs.mkdir(arg, function(err) {

		if(err) {
			handleError(err);
		}
	}); //make dir

});


function handleError(err) {

	console.log(err);

	if(err.code==='EEXISTS') {
		console.log('Directory already exists');

	} else {

		console.log('Error occured creating the directory');
	}
}