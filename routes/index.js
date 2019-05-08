var express = require('express');
var router = express.Router();

var landing  = require('../controllers/landing');
//var db_connection = require('../express-mysql/db_connection');



/* GET home page. */
router.get('/',landing.get_landing);
router.post('/',landing.submit_studentID);





module.exports = router;
