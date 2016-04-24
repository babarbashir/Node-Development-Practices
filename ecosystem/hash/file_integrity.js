
//get the file from web to verify the file integrity using hash


var http = require('http'),
fs = require('fs'),
crypto = require('crypto');


var req = http.get('http://nodejs.org/dist/v.0.10.28/win-x64/node.exe', function(res){
var hash = crypto.createHash('sha1');
	res.on('data', function(data){
		hash.update(data);
	});

	res.on('end', function(){
		var dig = hash.digest('hex');
		if(dig==='638dc7e840206d03855d940d18e4ed92855034683290ef30ef505a3d1395b88e') {
			console.log('matches');
		}else {
			console.log('not matching');
		}

	});

	

});