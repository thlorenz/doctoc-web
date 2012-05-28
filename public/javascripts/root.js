(function ($) {
    var $submit = $('#submit'),
        $url    = $('#url'),
        $tocit  = $('#tocit'),
        $result = $('#result > textarea:first');

    function submit() {

        $.ajax({
            type     :  $tocit.attr('method'),
            dataType :  'json',
            url      :  $tocit.attr('action'),
            data     :  $tocit.serialize()
        })
        .fail(function (err)  { console.log('err', err);  })
        .done(function (data) { 
            if (data.err) {
                console.log(data.err);
            } else {
                var lowestRank = _(data.headers).chain().pluck('rank').min(),
                    result = _(data.headers)
                    .map(function (x) {
                        var indent = _(_.range(x.rank - lowestRank)).reduce(function (acc, x) { return acc + '\t'; }, '');

                        return indent + '- [' + x.name + '](' + x.link + ')';
                    })
                    .join('\n');

                var title ='**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*';
                $result.html(title +'\n\n' + result);
                }
            });
    }

    $tocit.on('submit', function(event){ event.preventDefault(); submit(); });
})(jQuery);
