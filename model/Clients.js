/**
 * Created by suman on 29/5/16.
 */
//dependency
var mongoose = require('mongoose');

//schema defination
var schema;

schema = mongoose.Schema({
    BusinessName : {type: String,default:""},
    BusinessType : {type: String,default:""},
    Description :{type: String,default:""},
    LoanAmount : {type:Number ,default:0.0},
    LoanTime : {type: Date,default:new Date()},
    LoanInterest :{type:Number,default:0.0}
});
var Client = mongoose.model('Client',schema);
module.exports = Client;