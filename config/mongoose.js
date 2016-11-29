/**
 * Created by BenYin on 11/29/2016.
 */
var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);

    require('../app/models/user.server.model');

    return db;
}