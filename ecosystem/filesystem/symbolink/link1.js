var fs =  require('fs');

fs.link('D:/Java/gradle-2.11/bin/gradle.bat','./gradlelink', function(err){
	if(err) {
		console.log(err);
	}
});



// for sync / blocking link 
//fs.linkSync();


fs.symlink('D:/Java/gradle-2.11/bin/gradle.bat','./gradlelink', function(err){
	if(err) {
		console.log(err);
	}
});


// for sync / blocking link 
//fs.symlinkSync();


//read hard link

fs.readlink('./gradlelink', function(err, stringOut) {
	if(err) return;

	console.log(stringOut);
});


//readlink Sync

//fs.readlinkSync


//read sym link

