var crypto = require('crypto'),
secret = 'not gonna tell you';


var hash = crypto.createHash('sha1').update('secret message').digest('hex');

var HMAC = crypto	.createHmac('sha1', secret).update('secret message').digest('hex');

console.log(hash);
console.log(HMAC);
