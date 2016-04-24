var crypto = require('crypto'), 
fs=require('fs'),
algo='aes256',
key='cheese';


//var ciphers = crypto.getCiphers();

//console.log(ciphers.join(', '));

var text =  fs.readFileSync('myfile.txt', {
	encoding: 'utf8'
});

console.log(text);
try {
var cipher = crypto.createCipher(algo, key);

var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');

console.log(encrypted);
console.log('\r\n');

var decipher = crypto.createDecipher(algo,key);

var decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');

if(decrypted === text) {
	console.log('yey we did it\r\n');
	console.log(decrypted)

} else {
	console.log('we failed');
}
}catch(ex) {
	console.log(ex);
}