var fs = require('fs')

var args;


function traverseDirectory(startDir, usePath, callback) {
	if (arguments.length === 2 && typeof arguments[1] === 'function'){

		callback = usePath;
		usePath = false;
	}  //end if


	var parseDirectory = [];

	fs.readdir(startDir, function(err, dirList){

		if(usePath) {
			startDir = fs.realpathSync(startDir);
		}  //end usePath

		if (err) {
			return callback(err);		
		} 

		var listLength = dirList.length;

		if(!listLength) {
			return callback(null, parseDirectory);
		} //end of listlength



		dirList.forEach(function(file){

			file = startDir + '/' + file;
			fs.stat(file, function(err, stat){
				
				parseDirectory.push(file);

				if(stat && stat.isDirectory()) {

					traverseDirectory(file, function(err, parsed){
						parseDirectory = parseDirectory.concat(parsed);

						if(!--listLength) {
							callback(null, parseDirectory);
						}

					}); // recursive traverseDirectory

				} else {
					if(!--listLength) {
							callback(null, parseDirectory);
						}

				}//end id for stat

			}); // end stat 
		}); //end dirList

	});  //end readdir

}



// take args and parse and pass

args = process.argv.splice(2);

args.forEach(function(arg){
	console.log('directory name' + arg);
	
/*
	traverseDirectory(arg, function(err, result) {
		console.log('here in first travers');
		if(err) {
			console.log(err);

		}

		console.log(result);

	});
*/

	traverseDirectory(arg, true, function(err, result) {
		
		if(err) {
			console.log(err);
		}

		console.log(result);
		result.forEach(function(info){
			fs.watch(info, function(evt, file){
				console.log(file + ' : ' + evt);
			});
		});
	});

});


