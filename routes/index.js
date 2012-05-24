var fs = require('fs'),
    path = require('path');

fs.readdirSync("./routes")
    .forEach(function(file) {
        if (file !== 'index.js') {
            var module = path.basename(file).split('.')[0];
            exports[module] = require("./" + file)[module];
        }
});
