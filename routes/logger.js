var express = require('express');
var router = express.Router();
const path = require('path');

const fs = require('fs');
const https = require('https');

const LoggerLogic = require("../modules/logic/loggerlogic")



router.post('/add', function (req, res){
    let logmesssage = req.body;
    LoggerLogic.create(logmesssage).then((log)=>{
        res.send(log)
    }).catch((err)=>{
        res.send(err)
    })
    
})


module.exports = router;