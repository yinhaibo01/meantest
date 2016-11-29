/**
 * Created by BenYin on 11/28/2016.
 */
exports.render = function (req, res) {
    if (req.session.lastVisit) {
        console.log('last session: ' + req.session.lastVisit);
    }

    req.session.lastVisit = new Date();
    // res.send('Hello World');
    res.render('index', {
        title: 'Hello World'
    })
};