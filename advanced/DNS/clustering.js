//node core clustering version

var cluster = require('cluster'),
cpuCount = require('os').cpus().length;

cluster.setupMaster({
	exec: 'cluster-execute.js'
});

console.log('cpuCount: ' + cpuCount);


if(cluster.isMaster) {
	for(var i = 0;i< cpuCount; i++){
		cluster.fork();
	} //end fpor

	cluster.on('fork', function(worker){
		console.log(worker.id + ' worker is forled');
	});

	cluster.on('listening', function(worker, address){
		console.log(worker.id + ' worker is listening '+ address)
	});


	cluster.on('online', function(worker){
		console.log(worker.id + ' worker is online');

	});

	cluster.on('disconnect', function(worker){
		console.log(worker.id + ' worker is disconnected');
		
	});

	cluster.on('exit', function(worker, code, signal){
		console.log(worker.id + ' worker is dead');
		
	});

}





