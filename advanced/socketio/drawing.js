$(document).ready(function(){
	var canvs = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	remotecanvas = document.getElementById("remotecanvas"),
	remotectx = remotecanvas.getContext("2d"),
	$cvs = $("#canvas"),
	top = $cvs.offset.top,
	left = $cvs.offset.left,
	wsc = new WebSocket('ws://localhost:8080', 'draw-protocol'),
	mySocketId = -1;

	console.log('we are here');
	var resizeCvs = function(){
		ctx.canvas.width = remotectx.canvas.width = $(window).width();
		ctx.canvas.height = remotectx.canvas.height = $(window).height();
	};


	var initialzieCvs = function(){
		ctx.lineCap = remotectx.lineCap = "round";
		resizeCvs();
		ctx.save();
		remotectx.save();
		ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
		remotectx.clearRect(0,0,remotectx.canvas.width, remotectx.canvas.height);
		ctx.restore();
		remotectx.restore();
	};

	var draw = {
		isDrawing: false,
		mousedown: function(ctx, coordinates) {
			ctx.beginPath();
			ctx.moveTo(coordinates.x, coordinates.y);
			this.isDrawing = true;
		},
		mousemove : function(ctx, coordinates) {
			if(this.isDrawing){
				ctx.lineTo(coordinates.x, coordinates.y);
				ctx.stroke();
			}
		},
		mouseup : function(ctx, coordinates) {
			this.isDrawing = false;
			ctx.lineTo(coordinates.x, coordinates.y);
			ctx.stroke();
			ctx.closePath();
		},

		touchstart : function(ctx, coordinates) {
			ctx.beginPath();
			ctx.moveTo(coordinates.x, coordinates.y);
			this.isDrawing = true;
		},

		touchmove : function(ctx, coordinates){
			if(this.isDrawing){
				ctx.lineTo(coordinates.x, coordinates.y);
				ctx.stroke();
			}
		},

		touchend : function(ctx, coordinates){
			if(this.isDrawing){
				this.touchmove(coordinates);
				this.isDrawing = false;
			}
		}

	}; //end draw

	//create a function to pass touch events and coordinates to drawer
	function setupDraw(event, isRmeote){
		var coordinates ={};
		var evt = {};
		evt.type = event.type;
		evt.socketid = mySocketId;
		evt.lineWidth = ctx.lineWidth;
		evt.strokeStyle = ctx.strokeStyle;

		if(event.type.indexOf('touch') != -1){
			evt.targetTouches  = [{pageX:0, pageY:0}];
			evt.targetTouches[0].pageX = event.targetTouches[0].pageX || 0;
			evt.targetTouches[0].pageY = event.targetTouches[0].pageY || 0;
			coordinates.x = event.targetTouches[0].pageX - left;
			coordinates.y = event.targetTouches[0].pageY - top;								
		} else {
			evt.pageX = event.pageX;
			evt.pageY = event.pageY;
			coordinates.x = event.pageX - left;
			coordinates.y = event.pageY - top;	
		} //end if indexOf('touch')

		if(event.strokeStyle) {
			remotectx.strokeStyle = event.strokeStyle;
			remotectx.lineWidth = event.lineWidth;
		}

		if(!isRmeote) {
			wsc.send(JSON.stringify(evt));
			draw[event.type](ctx,coordinates);
		} else {
			draw[event.type](remotectx,coordinates);

		}

	} //end setup draw


	window.addEventListener("mousedown", setupDraw, false);
	window.addEventListener("mousemove", setupDraw, false);
	window.addEventListener("mouseup", setupDraw, false);
	window.addEventListener("touchstart", setupDraw, false);
	window.addEventListener("touchmove", setupDraw, false);
	window.addEventListener("touchend", setupDraw, false);
	
});



