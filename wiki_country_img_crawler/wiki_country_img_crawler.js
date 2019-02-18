var cheerio = require('cheerio'); // 파싱하기 위해 필요한 모듈 jquery 처럼 태그를 가져올 수 있다.
var request = require('request'); // nodejs 에서 request를 보낼 수 있다. html을 가져올 때 사용한다.
var fs = require('fs'); // 파일을 읽고 쓸 때 사용한다.
var urlencode = require('urlencode'); // url에 들어갈 한글을 퍼센트 인코딩해준다.

var arr = []; // 나라 이름이 들어가는 배열
var url = 'https://ko.wikipedia.org/wiki/%EB%82%98%EB%9D%BC_%EC%9D%B4%EB%A6%84%EC%88%9C_%EC%88%98%EB%8F%84_%EB%AA%A9%EB%A1%9D'; // 나가 목록이 들어있는 위키url

request(url, function(error, response, html){  
    if (error) {
        console.log('['+new Date().toString().substring(4, 24) + '] '+ error) ;
    }

    var $ = cheerio.load(html); // 위키 사이트를 html로 받아온다.
    var ii = 1;

    $('div.mw-parser-output ul li').each(function(){ // div.mw-parser-output ul li 에 나라 이름이 입력돼있다.
        var str =$(this).text();
        var end = str.indexOf('-');
        str = str.substring(0, end-1);
        arr.push(str); // 나라 이름을 배열에 하나씩 저장한다.
        console.log(++ii +' ' + str);
    });

    go(); // 국기 이미지를 파싱하고 다운로드 하는 함수
});

function go(){
    var ii2 = 0;

    for (var i = 0; i < arr.length; i++) {
        var url2 = 'https://ko.wikipedia.org/wiki/'+urlencode(arr[i]); // 해당 국가 위키 url

        request(url2, function(error2, response2, html2){  
            if (error2) {
                console.log('['+new Date().toString().substring(4, 24) + '] '+ error) ;
            }

            var $ = cheerio.load(html2); // 해당 국가 위키사이트를 html로 가져온다.

            var idx = 0;
            var filename = $('#firstHeading').text();
            $('tbody img.thumbborder').each(function(){ // 국기 이미지가 있는 태그를 가져온다.
                if(idx == 0){
                    var src =$(this).attr('src'); // 국기 이미지 src를 가져온다.
                    console.log(++ii2+ ' ' +src);

                    download('https:'+src, filename+'.jpg', function(){ // 국기 이미지 다운로드
                        console.log(filename+' done!');
                    });
                }  
                idx++;                 

            });

        });

    }
}

function download(uri, filename, callback){
    request.head(uri, function(err, res, body){
        // console.log('content-type:', res.headers['content-type']);
        // console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

