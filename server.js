/**
 * Created by BenYin on 11/28/2016.
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var Mongoose = require('./config/mongoose');
var express = require('./config/express');

var db = Mongoose();
var app = express();

app.listen(3000);
console.log('Server running at http://localhost:3000/');

module.exports = app;