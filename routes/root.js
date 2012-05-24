exports.root = function(req, res){
    console.log('%s /', req.method);
    res.render('index', { title: 'Doc-Toc' });
};
