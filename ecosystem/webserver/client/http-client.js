var http = require('http'),
args = process.argv.splice(2);

var clientOptions = {
	host: 'localhost',
	port: 8080,
	path: '/',
	method: 'GET'
};



args.forEach(function(arg) {
switch(arg) {
	case 'GET': 
		clientOptions.method = 'GET';
		break;
	case 'SUBMIT':
	case 'POST':
		clientOptions.method = 'POST';
		clientOptions.path = '/api'
		break;
	case 'UPDATE':
	case 'PUT':
		clientOptions.method='PUT';
		clientOptions.path='/api';
		break;
	case 'DELETE':
		clientOptions.method = 'DELETE';
		clientOptions.path = '/api';
		break;
	case 'REMOVE':
	default:
		clientOptions.method = 'GET';
		break;

}  //end switch



var clientReq = http.request(clientOptions, function(res) {
	console.log('status code: ' + res.statusCode);

	switch(res.statusCode) {

		case 200:
			res.setEncoding('utf8');
			res.on('data', function(data) {
				console.log('data: ' + data);
			});
			break;
		case 404:
			console.log('404');
			break;
	} //end switch statusCOde

});  

//process client request
//handle error
clientReq.on('error', function(err){
	if(err) throw err;
});

clientReq.end();

});