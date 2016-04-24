process.emit('power::init');

exports.power = function(base, exponent) {
	var result = 1;
	process.emit('power-begin');
	for(var count=0; count < exponent; count++) {
		result *= base;
	}

	return result;
};