
process.on('message', function(msg, handl){

	console.log(msg);

	if(msg === 'server'){
		handl.on('connection', function(){
			console.log('connected');
		});
	} // end if
});