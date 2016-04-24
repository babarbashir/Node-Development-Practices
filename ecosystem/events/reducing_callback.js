//reducing nested call backs

var events = require('events');

var myCart = function() {
	this.data = {
		item: 'thing'
	};
}

myCart.prototype = new events.EventEmitter();
myCart.prototype.retrieveCart = function(){
	this.emit('data', this.data);
}

myCart.prototype.updateCart = function() {
	this.emit('result', this.data);
}

myCart.prototype.sendResults = function(){
	console.log(this.data);
	this.emit('complete');
}


var cart = new myCart();
cart.on('data', function(data){
	cart.data['new'] = 'other thing';
	cart.updateCart();
});

cart.on('result', function(data){
cart.sendResults(data);
});


cart.on('complete', function(){
	console.log('cart updated');
});


cart.retrieveCart();