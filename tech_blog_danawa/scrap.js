var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio'); 

request('http://tech.kakao.com/', function(error, response, html){  
	if (error) {
		console.log('['+new Date().toString().substring(4, 24) + '] '+ error) ;
	}

	// console.log(html);
    var $ = cheerio.load(html); // 위키 사이트를 html로 받아온다.

    $('li.post-item.post').each(function(){ // div.mw-parser-output ul li 에 나라 이름이 입력돼있다.
    	var str =$(this).html();
    	console.log(str);

  //   	request('http://codeforces.com/profile/'+str, function(error, response, html){  
  //   		if (error) {
  //   			console.log('['+new Date().toString().substring(4, 24) + '] '+ error) ;
  //   		}

		//     var $2 = cheerio.load(html); // 위키 사이트를 html로 받아온다.

		//     $2('div.title-photo div div div img').each(function(){ // div.mw-parser-output ul li 에 나라 이름이 입력돼있다.
		//     	var str2 =$(this).attr('src');
		// //    	console.log(str2);


		//     	download('https:'+str2, str+'.jpg', function(){ // 국기 이미지 다운로드
		//     		console.log(str+' done!');
		//     	});
		//     });
		// });

	});
});


function download(uri, filename, callback){
	request.head(uri, function(err, res, body){
        // console.log('content-type:', res.headers['content-type']);
        // console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

