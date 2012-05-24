(function ($) {
    var $submit = $('#submit'),
        $url    = $('#url'),
        $tocit  = $('#tocit');

    $url.attr('value', 'https://github.com/thlorenz/doc-toc/blob/master/README.md');


    function submit() {

        $.ajax({
            type     :  $tocit.attr('method'),
            dataType :  'json',
            url      :  $tocit.attr('action'),
            data     :  $tocit.serialize()
        })
        .done(function (data) { console.log('got', data); })
        .fail(function (err)  { console.log('err', err);  });
    }

    $tocit.on('submit', function(event){ event.preventDefault(); submit(); });
    //$submit.on('click', go);
})(jQuery);
