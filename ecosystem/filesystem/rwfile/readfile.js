

var fs = require('fs'),
args;


args = process.argv.splice(2);


args.forEach(function(arg){
	fs.readFile(arg, 'utf8', function(err, data) {
		if(err) {
			console.log(err);
		}


		console.log('reading async: \n ' + data);
	});


//read file synchronously
var file = fs.readFileSync(arg, 'utf8');

console.log('readng via sync\n: ' + file);


//read file as stream

var readstr = fs.createReadStream(arg, {flag: 'r', encoding: 'utf8'});

readstr.on('data', function(data){
console.log('reading via stream \n ' + data);
});

});