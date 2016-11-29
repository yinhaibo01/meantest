/**
 * Created by BenYin on 11/29/2016.
 */
var users = require('../../app/controllers/user.server.controller');

module.exports = function (app) {
    app.route('/users')
        .post(users.create)
        .get(users.list);

    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);

    app.param('userId', users.userByID);
}