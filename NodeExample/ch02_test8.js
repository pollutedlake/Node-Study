var path = require('path');

var directories = ['Users', 'Psh95', 'docs'];
var dirStr = directories.join();
console.log('dir : ' + dirStr); // dir : Users,Psh95,docs

var dirStr2 = directories.join(path.sep);
console.log('dir2 : ' + dirStr2);   // dir2 : Users\Psh95\docs

var filepath = path.join('/Users/Psh95', 'notepad.exe');
console.log('dir3 : ' + filepath); // dir3 : \Users\Psh95\notepad.exe

var dirname = path.dirname(filepath);
console.log('dirname : ' + dirname); // dirname : \Users\Psh95
var basename = path.basename(filepath);
console.log('basename : ' + basename); // basename : notepad.exe
var extname = path.extname(filepath);
console.log('extname : ' + extname);    // extname : .exe