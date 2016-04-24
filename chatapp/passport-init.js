var passport = require("passport");
var _ = require("lodash");
var users = require("./data/users.json");
var LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(function(username, password, done){
	console.log("passport-strategy");
	var user = _.find(users, u => u.name === username);

	if(!user || user.password !== password) {
		done(null, false);
		return
	}

	done(null, user);
}));

passport.serializeUser(function(user, done){
	done(null, user);
});



passport.deserializeUser(function(user, done){
	done(null, user);
});