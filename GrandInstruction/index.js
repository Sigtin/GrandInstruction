const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');


// var MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://Sigtin:Zethura21%40jk@grandinstruction-shard-00-00-merzb.mongodb.net:27017,grandinstruction-shard-00-01-merzb.mongodb.net:27017,grandinstruction-shard-00-02-merzb.mongodb.net:27017/test?ssl=true&replicaSet=GrandInstruction-shard-0&authSource=admin&retryWrites=true";
mongoose.connect(uri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`In the database`);

    const register = () => {

    }
});

// static files
app.use(express.static(__dirname + '/public'));

// include routes
var routes = require('./routes/routes');
app.use('/', routes);

// Routes
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/index.html'));
// });

// app.get('/about', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/about.html'));
// });

// app.get('/faq', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/faq.html'));
// });

// app.get('/profile', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/profile.html'));
// });

// app.get('/register', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/register.html'));
// });

// app.get('/lesson', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/lesson.html'));
// });

// app.get('/login', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/login.html'));
// });

// viewed at http://localhost:8080



app.listen(8080);