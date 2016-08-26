var express = require('express');
var router = express.Router();
var os = require("os");


/* GET home page. */
router.get('/', function(req, res) {
  
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;;
    var language = req.headers["accept-language"];
    var operatingSystem = os.platform();
    var data = {IP: ip, Language: language, OS: operatingSystem};
    res.send(data);
    
});

module.exports = router;
