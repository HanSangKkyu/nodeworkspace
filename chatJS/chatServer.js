// server.js

var express = require('express');
var app = express();
var http = require('http').Server(app); //1
var io = require('socket.io')(http);    //1

http.listen(8082, function(){ //4
	console.log('server on!');
});

app.get('/',function(req, res){  //2
	res.sendFile(__dirname + '/index.html'); // __dirname : 현재 서버 파일이 있는 경로
});

var count=1;
io.on('connection', function(socket){ //3
	console.log('user connected: ', socket.id);  //3-1
	console.log('This user count is : ', count);  //3-1
	
	var name = "user" + count++;                 //3-1
	io.to(socket.id).emit('change name', name);   //특정 소켓 연결 클라이언트에게만 보낸다.

	socket.on('disconnect', function(){ //3-2
		console.log('user disconnected: ', socket.id);
	});

	socket.on('send message', function(name,text){ //3-3
		var msg = name + ' : ' + text;
		console.log(msg);
		io.emit('receive message', msg); // 모든 소켓 연결 클라이언트에게 보낸다.
	});
});

