const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');

// express 기타 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 8080; // express 서버 포트 설정

// express 서버 오픈
const server = app.listen(port, function(){
	console.log("Express server has started on port " + port)
});


// MONGODB SERVER 연결정보
const DB_ID = "TESTUSER";
const DB_PW = "TESTUSER01";
const DB_IP = "58.141.61.11";
const DB_PORT = "27017";
const COLLECTION = "TEST";

// MONGODB SERVER에 연결
mongoose.connect('mongodb://'+DB_ID+':'+DB_PW+'@'+DB_IP+':'+DB_PORT+'/'+COLLECTION+'?authSource=admin',
				{useNewUrlParser: true, useUnifiedTopology: true});

// mongoDB 잡다한 설정들
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// MONGODB SERVER 연결 테스트
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server");
});


// --------------- Schema Model --------------- start
const memberSchema = new mongoose.Schema({
	id: { type: String, required: true }, // required == not null
	pw: { type: String, required: true },
	email: { type: String, default: "미정" }
},
{
	timestamps: true, // 생성, 수정된 시각
	versionKey :false // _v 없애기
});

const Member = mongoose.model('member', memberSchema);
// --------------- Schema Model --------------- end



// --------------- express router --------------- start
app.post('/test_col', function(req, res){
	console.log(req.body);

	const data = new Member({
		id: req.body.id,
		pw: req.body.pw,
		email: req.body.email
	});	
	
	data.save(function(err){
		if(err) {
			console.log(err);
		}else{
			console.log('Saved successfully');
		}
		res.end();
	});
});

app.get('/test_col', function(req, res){
	console.log(req.query);

	Member.find({ id : req.query.id }, function(err, docs) {
		console.log(docs);
	});
	
	res.end();
	
});

app.put('/test_col', function(req, res){
	console.log(req.body);

	Member.findOneAndUpdate({id : req.body.id}, req.body, function(err, docs){		
		if(err){
			console.log(err);
		}else{
			console.log(docs);
		}
	});

	res.end();
});

app.delete('/test_col', function(req, res){
	console.log(req.body);

	Member.findOneAndRemove({id : req.body.id}, function(err, docs){
		if(err){
			console.log(err);
		}else{
			console.log(docs);
		}
	})
	res.end();
});

// --------------- express router --------------- end
