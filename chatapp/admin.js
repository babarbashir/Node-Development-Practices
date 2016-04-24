var uuid = require("node-uuid");
var _ = require("lodash");
var rooms = require("./data/rooms.json");
var express = require("express");

var router = express.Router();
module.exports = router;


router.use(function(req, res, next){
	if(req.user.admin){
		next();
		return;
	}
	res.redirect("/login");
});


//render the available chat rooms
router.get('/rooms', function (req, res) {
    res.render("rooms", {
  	title: "Admin Rooms",
  	rooms: rooms
  });  
});

//load the form for room creation
router.get('/rooms/add', function (req, res) {
    res.render("add");  
});

//handle the room create form submission with post method
router.post('/rooms/add', function (req, res) {
	console.log("starting: >> " + req.method);



	var room = {
		name: req.body.name,
		id: uuid.v4()
	};

	rooms.push(room);

    //res.json(rooms);  
    res.redirect(req.baseUrl + "/rooms");
});


//handle the room edit form submission with post method
router.post('/rooms/edit/:id', function (req, res) {
	console.log("starting: >> " + req.method);

	var room_id = req.params.id;
	//var room = rooms.filter(r => r.id === room_id);	
	var room = _.find(rooms, r => r.id === room_id);
		if(!room) {
		res.sendStatus(404);
		return;
		}
	room.name = req.body.name;

    //res.json(rooms);  
    res.redirect(req.baseUrl + "/rooms");
});


//delete a chat room route
router.get('/rooms/delete/:id', function (req, res) {
	var room_id = req.params.id;
	rooms = rooms.filter(r => r.id != room_id);
	res.redirect(req.baseUrl + "/rooms");
   // res.send("Room ID to delete: " + room_id);  
});

//edit form to edit a rom route
router.get('/rooms/edit/:id', function (req, res) {
	var room_id = req.params.id;
	//var room = rooms.filter(r => r.id === room_id);	
	var room = _.find(rooms, r => r.id === room_id);
	if(!room) {
		res.sendStatus(404);
		return;
	}

	res.render("edit",{room});
   // res.send("Room ID to delete: " + room_id);  
});