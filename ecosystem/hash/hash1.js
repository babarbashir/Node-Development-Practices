var crypto = require('crypto'),
hashes = crypto.getHashes();


//list all available hashes
//console.log(hashes.join(', '));



hashes.forEach(function(hash){
['','quick brown fox jumps over the lazy dog'].forEach(function(txt){
	var hashed;
	try{
		hashed = crypto.createHash(hash).update(txt).digest('hex');
	}catch(ex){
		if(ex === 'Digest method not supported'){

		} else {
			console.log(ex, hash);

		} //if ex
	} //end try-catch

	console.log(hashed, hash);
});

});