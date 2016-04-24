var events = require('events'),
emitter = new events.EventEmitter();


//custom way to throttle events (emit only once)
function listener(){

	console.log('one timer');
	emitter.removeListener('oneTimer', listener);
}


emitter.on('oneTimer', listener);

emitter.emit('oneTimer');
emitter.emit('oneTimer');


//built in way to create a single even

emitter.once('1Timer', function(){
	console.log('Another example of one time event');
});

emitter.emit('1Timer');
emitter.emit('1Timer');