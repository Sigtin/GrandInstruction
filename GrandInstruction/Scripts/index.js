// var MongoClient = require('mongodb').MongoClient;

// var uri = "mongodb://Sigtin:Zethura21%40jk@grandinstruction-shard-00-00-merzb.mongodb.net:27017,grandinstruction-shard-00-01-merzb.mongodb.net:27017,grandinstruction-shard-00-02-merzb.mongodb.net:27017/test?ssl=true&replicaSet=GrandInstruction-shard-0&authSource=admin&retryWrites=true";
// MongoClient.connect(uri, function (err, db) {
//     // Paste the following examples here

//     db.close();
// });

//Auto Updating Copyright Script created with Rapid Purple Webmaster Tools(http://rapidpurple.com).
const y2k = number => { 
    return (number < 1000) ? number + 1900 : number; 
}
const today = new Date();
const year = y2k(today.getYear());
const copyright = document.createTextNode('© ' + year + ' Austin Sigler - All Rights Reserved');
document.getElementById("copyright").appendChild(copyright);

document.getElementById("navbar-right").innerHTML = `<a href="register.html">Register</a><a href="login.html">Login</a>`