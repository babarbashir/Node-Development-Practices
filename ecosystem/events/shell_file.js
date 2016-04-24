
// how to run shell file using exec file

var execFile = require('child_process').execFile;

execFile('file.bat', function(err, stdout, stderr){

	if(err) console.log(err);

	console.log(stdout);

	if (stderr) console.log(stderr);
});