var fs = require('fs');

//var jsonString = '{ "name": "Joe"}';
var jsonString = {
    name: 'Joe'
};


fs.writeFile('data2.json', JSON.stringify(jsonString), function() {
    if (err) {
        console.log(err);
    }
});