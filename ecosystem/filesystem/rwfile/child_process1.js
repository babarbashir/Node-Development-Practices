var child = require('child_process');

child.exec('copy file2.txt file1.txt', function(err, stdout, stderr){

	console.log('out: ' + stdout);
	if (stderr) console.log('stderr: ' + stderr);
	if(err) console.log('err: ' + err);

});