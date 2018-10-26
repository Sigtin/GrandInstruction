var express = require('express');
var router = express.Router();
var path = require('path');
var User = require('../models/user');

// Routes
router.get('/', function (req, res) {
    res.sendFile(path.join('C:/Users/Austin Sigler/Desktop/Quarter 9/Capstone/Git/GrandInstruction/GrandInstruction/public/index.html'));
});

router.get('/about', function (req, res) {
    res.sendFile(path.join('C:/Users/Austin Sigler/Desktop/Quarter 9/Capstone/Git/GrandInstruction/GrandInstruction/public/about.html'));
});

router.get('/faq', function (req, res) {
    res.sendFile(path.join('C:/Users/Austin Sigler/Desktop/Quarter 9/Capstone/Git/GrandInstruction/GrandInstruction/public/faq.html'));
});

router.get('/profile', function (req, res) {
    res.sendFile(path.join('C:/Users/Austin Sigler/Desktop/Quarter 9/Capstone/Git/GrandInstruction/GrandInstruction/public/profile.html'));
});

router.get('/register', function (req, res) {
    res.sendFile(path.join('C:/Users/Austin Sigler/Desktop/Quarter 9/Capstone/Git/GrandInstruction/GrandInstruction/public/register.html'));
});

router.get('/lesson', function (req, res) {
    res.sendFile(path.join('C:/Users/Austin Sigler/Desktop/Quarter 9/Capstone/Git/GrandInstruction/GrandInstruction/public/lesson.html'));
});

router.get('/login', function (req, res) {
    res.sendFile(path.join('C:/Users/Austin Sigler/Desktop/Quarter 9/Capstone/Git/GrandInstruction/GrandInstruction/public/login.html'));
});

module.exports = router;