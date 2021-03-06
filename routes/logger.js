var express = require('express');
var router = express.Router();
const path = require('path');

const fs = require('fs');
const https = require('https');

const os = require('os');


const LoggerLogic = require("../modules/logic/loggerlogic")



router.post('/add', function (req, res){
    let logmesssage = req.body;
    LoggerLogic.create(logmesssage).then((log)=>{
        res.send(log)
    }).catch((err)=>{
        res.send(err)
    })
    
})

router.get('', function (req, res){

    var hostname = os.hostname();
    let id = LoggerLogic.makeid(10);

    res.send("Hello, this is example app from: <b>" + hostname + "</b>, session : " + id )
    
})


module.exports = router;