
exports._getType = function(){
	return "Common JS"
}
exports.describe = function(){
	return "this is " + this._getType();
}