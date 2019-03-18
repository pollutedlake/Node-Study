var express = require('express');
var http = require('http');

var app = express(); // express 서버 객체

app.set('port', process.env.PORT || 3000); // port 설정, process.env.PORT가 없다면 3000사용

app.use(function(req, res, next) {
    console.log('첫번째 미들웨어 호출됨.');
    
    var userAgent = req.header('User-Agent'); // user-agent 추출
    var paramName = req.query.name; // 요청 parameter 추출(get방식) query안에 넣음
    
    res.send('<h3>서버에서 응답. User-Agent -> ' + userAgent + '</h3><h3>Param Name -> ' + paramName + '</h3>');
});


var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port'));
});