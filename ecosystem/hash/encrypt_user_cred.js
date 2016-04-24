
//encrypt user passwords

var crypto = require('crypto'),
password = 'mysupertsecretpasscode';

function getHmac(password, salt){
	var out = crypto.createHmac('sha256', salt).update(password).digest('hex');
	return out
}


function getHash(password, salth) {
	var out = crypto.createHash('sha256').update(salt + password).digest('hex');
	return out

}

function getSalt() {

	return crypto.randomBytes(32).toString('hex');

}


var salt = getSalt();
var hmac = getHmac(password, salt);
var hash = getHash(password,salt);

console.log('my pwd: ' , password , ' salt: ', salt, ' hashed: ', hash  );
console.log('my pwd: ' , password , ' salt: ', salt, ' hmaced: ', hmac  );
