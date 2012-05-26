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
                var result = _(data.headers)
                    .map(function (x) {
                        var indent = _(_.range(x.rank - 1)).reduce(function (acc, x) { return acc + '\t'; }, '');

                        return indent + '- &lt;a href=&quot;' + x.link + '&quot;&gt;' + x.name + '&lt;/a&gt;';
                    })
                    .join('\n');
                $result.html(result);
                }
            });
    }

    $tocit.on('submit', function(event){ event.preventDefault(); submit(); });
})(jQuery);
