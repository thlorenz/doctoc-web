var processor = require('./../processing/processor');

var options = {
    host: 'github.com',
    port: 443,
    path: '/thlorenz/dox/blob/master/dev/jquery.md'
};

exports.tocit = function(req, res){
    console.log('/tocit', req.method);
    processor.getHeadersHttps(options, function (err, headers) {
        if (err) {
            console.error(err);
            res.json({ err: err }); 
        } else {
            console.log('sending:', headers);
            res.json({ headers: headers });
        }
    });
};


