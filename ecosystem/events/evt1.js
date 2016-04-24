
var events = require('events'),
emitter = new events.EventEmitter();

function doATask(status){
	if (status === 'success') {
		//task successded
		emitter.emit('taskSuccess');
	} else if(status === 'fail') {
		emitter.emit('taskFail');
	} //if status
}

emitter.on('taskSuccess', function() {
	console.log('task success');
});


emitter.on('taskFail', function() {
	console.log('task failed');
});


setTimeout(doATask(), 2000, 'success');

setTimeout(doATask(), 4000, 'fail');