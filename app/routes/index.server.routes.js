/**
 * Created by BenYin on 11/28/2016.
 */
module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};