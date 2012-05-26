var path      =  require('path'),
    url       =  require('url'),
    _         =  require('underscore'),
    processor =  require('./../processing/processor');


exports.tocit = function(req, res){
    console.log('/tocit', req.method);

    if (!req.query || !req.query.url) {
        var err = new Error('Query needs to have url');
        console.error('Invalid query: ', req.query);
        console.error(err);

        res.json({ err: err });
        return;
    }

    var addr    =  url.parse(req.query.url),
        options =  _(addr).extend({ port: 443 });

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

