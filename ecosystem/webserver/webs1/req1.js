//process requests

var http = require('http'), 
url = require('url');

var server = http.createServer(function(req, res) {

	//pull out headers first

	if(req.headers.dnt ==1) {
		console.log("do not track");
	} // track headers


	//parse the URL
	var url_parsed = url.parse(req.url, true);


	//handle REQ.METHOD

	if(req.method === 'GET'){
		//handle GET
		handleGetRequest(res, url_parsed);
	} else if(['POST','PUT','DELETE'].indexOf(req.method) > -1) {
		//handle API request
		handleAPIRequest(res, url_parsed, req.method);
	}else {

		res.end('Method not supported');

	} //end handle GET

});

//handleGetRequest Function
var handleGetRequest = function(res, url_parsed){
	console.log('search: ' + url_parsed.search);
	console.log('query params: ' + JSON.stringify(url_parsed.query));
	console.log('pathname: ' + url_parsed.pathname);
	console.log('path: ' + url_parsed.path);
	console.log('href: ' + url_parsed.href);
	res.end('GET\n');

} //end handle GetRequest



//handle the API calls
var handleAPIRequest = function(res, url_parsed, method) {

	if(url_parsed.path !=='/api') {
		res.statusCode = 404;
		res.end('404\n');
	} //not an API call

	res.end(method);

}  //end handleAPIRequest

server.listen(8080);