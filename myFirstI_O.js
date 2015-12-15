var fs = require('fs');

var filePath = process.argv[2];
var file = fs.readFileSync(filePath);

console.log(file.toString().split('\n').length - 1);