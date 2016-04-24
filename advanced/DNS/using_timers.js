//using timers in node js
var count = 0;

var getMockData= function(callback){
	var obj = {
		status: 'lookinggud',
		data: ['item0', 'item1', 'item2'],
		numberOfCalls: count++
	};

	return callback(null, obj);
};


var onDataSuccess = function(err, data) {
	if(err) console.log(err);

	if(data.numberOfCalls > 15) clearInterval(intrvl);

	console.log(data);
};

setImmediate(getMockData, onDataSuccess);

var tmr = setTimeout(getMockData,2e3, onDataSuccess);
tmr.unref();

var intrvl = setInterval(getMockData,50, onDataSuccess);



