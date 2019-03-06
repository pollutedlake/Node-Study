var path = require('path');

var directories = ['Users', 'Psh95', 'docs'];
var dirStr = directories.join();
console.log('dir : ' + dirStr);

var dirStr2 = directories.join(path.sep);
console.log('dir2 : ' + dirStr2);

var dirStr3 = path.join('/Users/Psh95', 'notepad.exe');
console.log('dir3 : ' + dirStr3);