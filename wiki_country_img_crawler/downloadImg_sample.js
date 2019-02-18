
var request = require('request');
var fs = require('fs');

var download = function(uri, filename, callback){
	request.head(uri, function(err, res, body){
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};

download('https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/150px-Flag_of_Guyana.svg.png', 'chinese.png', function(){
	console.log('done');
});