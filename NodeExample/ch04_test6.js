var fs = require('fs'); // fs = file system 모듈

fs.readFile('./package.json', 'utf8', function(err, data) {
    console.log(data);
}); // 파일을 다 읽었을 때 콜백함수 호출
// 비동기파일읽기