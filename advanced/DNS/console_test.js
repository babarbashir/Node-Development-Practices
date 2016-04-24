console.log('console.log in node.js');
console.info('console.info', ' in node.js');
console.error('console.error to stderr');
console.warn('console.error, writes to stderr');
console.time('timer');
setTimeout(console.timeEnd, 2000, 'timer');
console.dir({
	name: 'console.dir',
	logs: ['the','string representation', 'of objects']
});

var yo = 'yo';

console.trace(yo);

try {
	console.assert(1 === '1', 'one does not equal "one"');
}catch(ex) {
	console.error('an error occured', ex.message);
}

