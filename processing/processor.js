var $ = require('jQuery'),
    _ = require('underscore'),
    download = require ('./download');

function getParagraphHeaders (html) {
    $markdownHeaders = $(html).find('article.markdown-body.entry-content > :header');

    return _($markdownHeaders)
        .map(function (h) {
            var $h = $(h);
                $a = $(h).find('a:first');
            return {    
                rank: h.tagName.substr(1),
                link: '#' + $a.attr('name'),
                name: $h.text()
            };
        });
}

exports.getHeadersHttps = function (options, cb) {
    download.getHttpsPage(options, function (err, content) {
        if (err) { console.error (err); cb(err); return; }

        var headers = getParagraphHeaders(content);
        cb(null, headers);
    });
};

exports.getHeadersPath = function (path, cb) {
    download.getFilePage('./jquery.md', function (err, content) {
        if (err) { console.error (err); cb(err); return; }

        var headers = getParagraphHeaders(content);
        cb(null, headers);
    });
};
