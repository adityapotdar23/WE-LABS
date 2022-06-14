var fs = require('fs');
var data = "Hello World!!!!!!!!!!!!"
try {
    fs.writeFileSync('test1.txt', data, 'utf-8');
    const content = fs.readFileSync('test.txt', 'utf-8');
    console.log(data);
}
catch(err) {
    console.log(err);
}