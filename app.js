/**
 * Created by suman on 29/5/16.
 */
//Dependency
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require ('body-parser');


//MongoDB
mongoose.connect('mongodb://localhost/mydb');
var db = mongoose.connection;
db.on('error',function (msg) {
    console.log('Error in connection');
})

db.once('open',function (msg) {
    console.log('Connected to db');    
})

//Express
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//Routes
var apiroute = require('./routes/api');
app.use('/api',apiroute);


//Start Server
app.listen(9090);
console.log('running on port 9090');