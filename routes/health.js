var express = require('express');
var router = express.Router();
const path = require('path');

const fs = require('fs');
const https = require('https');

const os = require('os');



router.get('', function (req, res){


    res.send("Yes, I am healthy")
    
})


module.exports = router;