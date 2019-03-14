var express = require('express');
var http = require('http');

var app = express(); // express 서버 객체

app.set('port', process.env.PORT || 3000); // port 설정, process.env.PORT가 없다면 3000사용

app.use(function(req, res, next) {
    console.log('첫번째 미들웨어 호출됨.');
    
    req.user = 'mike';
    
    next(); // 다음 미들웨어 실행
}); // 첫번째 미들웨어

app.use(function(req, res, next){
    console.log('두번째 미들웨어 호출됨.')
    
    res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
    res.end('<h1>서버에서 응답한 결과입니다. : ' + req.user + '</h1>'); // 첫번째 미들웨에서 받은 속성 user에 mike가 들어가 있다.
}); // 두번째 미들웨어

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port'));
});