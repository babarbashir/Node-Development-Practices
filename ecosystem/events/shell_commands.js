
//how to use shell commands using exec

var exec = require('child_process').exec;

exec('dir', myfunc);


var myfunc = function(error, stdout, stderr) {
if(error) console.log('error');

console.log(stdout);
}

exec('ps ax | grep node', myfunc);