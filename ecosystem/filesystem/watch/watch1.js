var fs = require('fs'), 
file='./file.txt';

fs.watchFile(file, function(curr, prev){

	for(var key in curr) {
		if(curr[key] !== prev[key]) {
			console.log(key + ' altered ' + prev[key] + ' curr: ' + curr[key]);			
		}

	} //end for
});


fs.watch(file, function(event, filename){

if(filename){
	console.log(filename + ' ' + event);
} else{
	console.log(file + ' ' + event);
}
});