var express = require('express');
var http = require('http');

var app = express(); // express 서버 객체

app.set('port', process.env.PORT || 3000); // port 설정, process.env.PORT가 없다면 3000사용

app.use(function(req, res, next) {
    console.log('첫번째 미들웨어 호출됨.');
    
    res.redirect('http://google.co.kr');
});


var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port'));
});