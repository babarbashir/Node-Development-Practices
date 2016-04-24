//handle client responses


var http = require('http');

var clientOptions = {
	host: 'localhost',
	port: '8080',
	path: '/',
	method: 'GET'
};

var clientReq = http.request(clientOptions, function(res) {

	if(res.headers['x-ample'] === 'trigger'){

		console.log('we have seen x-ample heder triggered');
		switch(res.statusCode) {

			case 200:
				res.setEncoding('utf8');
				res.on('data', function(d){
					console.log('data: ' + d);
				});
				break;
			case 404:
				console.log('404 error');
				break;
			default:
				console.log('status code: ' + http.STATUS_CODES[res.statusCode]);
				break;

		} //switch statusCode
	}else {

		console.log('x-ample header not present');

	} //end if handle headers



});


clientReq.on('error', function(err){
	if(err) throw err;
});


clientReq.setHeader('Cache-Control', 'no-cache');


clientReq.end();