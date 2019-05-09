var cheerio = require('cheerio');
var request = require('request');

var url = 'https://www.tiobe.com/tiobe-index/';
request(url, function(error, response, html){
	if (!error) {
		var $ = cheerio.load(html);
		$('.table,.table-striped,.table-top20 > tbody > tr > td:nth-child(4)').each(function(){
			if($(this).html().toString().indexOf('<') == -1){
				console.log($(this).html());
			}
		});
	}else{
		console.log(error);
	}
});

