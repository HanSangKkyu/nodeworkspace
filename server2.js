var http = require('http');
var express = require('express');
var fs = require('fs'); // 파일 업로드를 위해 필요
var formidable = require('formidable'); // 파일 업로드를 위해 필요

var app = express();
app.set('views', __dirname + '/views'); //  /views 를 html이 있는 폴더로 설정한다.
app.set('view engine', 'ejs'); // ejs라는 npm 모듈을 view engine으로 사용하겠다.
app.engine('html', require('ejs').renderFile); // ejs라는 npm 모듈을 이용해서 html을 랜더링 할 것이다.

app.use(express.static(__dirname + '/views')); // 서버파일 위치/views 폴더를 기본 폴더 경로로 설정한다.(ex: /css 이렇게 해도 상대경로를 찾는다.)

app.get('/', function(req, res) {
	res.render('index.html'); // html 파일을 클라이언트에게 랜더링해준다.
});

app.get('/first', function(req, res) {
	fs.readdir('./data', function(error, filelist){
		console.log('['+new Date().toString().substring(4, 24) + '] '+'filelist loaded!');
		console.log('['+new Date().toString().substring(4, 24) + '] ');
		console.log(filelist);
		res.send(filelist); // 클라이언트에게 response를 보낸다. 
	});
});

app.get('/download',function(req, res){
	var filename = req.param('filename');
	var file = __dirname + '/data/' + filename; // __dirname : 서버가 실행되고 있는 폴더 경로
	console.log('['+new Date().toString().substring(4, 24) + '] '+filename+' downloaded!');
	res.download(file); // 파일을 다운로드 한다. 
});

app.post('/fileupload', function(req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var oldpath = files.filetoupload.path;
		var newpath = 'data/' + files.filetoupload.name;
		fs.rename(oldpath, newpath, function (err) {
			if (err) throw err;
			console.log('['+new Date().toString().substring(4, 24) + '] '+'upload complete!');
			res.redirect('/'); // url을 nodejs로 리다이렉트 해준다.
		});
	});
});


var server = app.listen(8888, function(){ // express 로 서버 열기
	console.log('['+new Date().toString().substring(4, 24) + '] '+"server startup!");
});