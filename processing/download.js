var util = require('util'),
    https = require('https');

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

var options = {
    host: 'github.com',
    port: 443,
    path: '/thlorenz/doc-toc/blob/master/README.md'
};

exports.getHttpsPage(options, function (err, content) {
    if (err) console.error (err); else console.log(content);
});
