/**
 * Created by suman on 29/5/16.
 */
//dependency
var express = require('express');
var clients = require('../model/Clients');



//routing
var router = express.Router();
router.get('/',function(req,res){
    res.end('Api server working ');
});

router.get('/clients',function(req,res){
    clients.find({}).exec(function(err,clients){
        if(err) throw err;
        else {
            res.json(clients);
        }
    })
});

router.post('/addclient',function(req,res){
    //console.log(req.body);
    clients.create(req.body);
    res.redirect('/api')
});

router.get('/client/:uid',function(req,res){
    console.log(req.params.uid);
    clients.find({'BusinessName': req.params.uid}).exec(function(err,result){
        if(err) throw err;
        else res.json(result);
    })
})


module.exports = router;