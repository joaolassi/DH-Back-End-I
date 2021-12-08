const fs = require('fs');

const data = fs.readFileSync('./teste.txt',
            {encoding:'utf8', flag:'r'});
 
// Display the file data
console.log(data);