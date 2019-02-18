var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio'); 

request('https://www.google.com/search?q=%EB%82%98%EB%AC%B4&hl=ko&authuser=0&tbm=isch&source=lnt&tbs=qdr:d&sa=X&ved=0ahUKEwip7auO28TgAhXIXrwKHXANA0wQpwUIHw&biw=1920&bih=969&dpr=1', function(error, response, html){  
	if (error) {
		console.log('['+new Date().toString().substring(4, 24) + '] '+ error) ;
	}

	var str = html.toString();
	fs.writeFile('result.txt', str ,'utf8', function(error, data){
		if (error) {throw error};
		console.log("ASync Write Complete");
	});

	console.log(str.indexOf('ou":"', 0));
	

    // var $ = cheerio.load(html); // 위키 사이트를 html로 받아온다.

    // $('a.rg_l img.rg_ic.rg_i').each(function(){ // div.mw-parser-output ul li 에 나라 이름이 입력돼있다.
    // 	var str =$(this).text();
    // 	console.log(str);
    // });



	// download('https:'+str2, str+'.jpg', function(){ // 국기 이미지 다운로드
	// 	console.log(str+' done!');
	// });
});