console.log("Hello world!!");

var fs =  require("fs");
var dmodule = require('./describe.js');

fs.readFile("log.txt","utf8",function(error, data){
	console.log(data);
});

console.log(dmodule.describe());