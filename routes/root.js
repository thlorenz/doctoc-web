exports.root = function(req, res){
    console.log('%s /', req.method);
    res.render('root', { title: 'DocToc' });
};
