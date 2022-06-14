var fs = require('fs');
const path = './test1.txt'
try {
    fs.unlinkSync(path)
}
catch(err) {
    console.log(err);
}