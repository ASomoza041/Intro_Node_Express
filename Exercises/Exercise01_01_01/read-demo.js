var fs = require('fs');


fs.readFile('./data1.json', 'utf-8', (err, data) => {
    data = JSON.parse(data);
    console.log(data.name);
});



