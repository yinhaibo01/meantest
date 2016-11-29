/**
 * Created by BenYin on 11/29/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    userName: String,
    passwork: String
});

mongoose.model('User', userSchema);