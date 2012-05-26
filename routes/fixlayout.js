exports.fixlayout = function(req, res){
    console.log('%s /fixlayout', req.method);
    res.render('fixlayout', { title: 'Doc-Toc' });
};
