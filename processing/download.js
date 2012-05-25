var util = require('util'),
    https = require('https'),
    fs    = require('fs');

exports.getHttpsPage = function(options, cb) {
    var completedOptions = {
        host: options.host,
        port: options.port || 443,
        path: options.path || '/'
    };

    var content = '';
    var req = https.request(completedOptions, function (res, err) {
        if (err) { cb(err); return; }

        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            content += chunk;
        });

        res.on('end', function (err) {
            if (err) { cb(err); return; }
            cb(null, content);
        });
    });

    req.end();
};

// Mainly for testing purposes
exports.getFilePage = function(path, cb) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) { 
            console.error(err); 
            cb(err);
        } else {
            cb(null, data);
        }
    });
};

