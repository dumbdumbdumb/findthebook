var express = require('express');
var router = express.Router();

var landing  = require('../controllers/landing');
var db_connection = require('../express-mysql/db_connection');


/*DB query test*/
db_connection.query("SELECT * FROM device_info", function (err, result) {
    if (err) throw err;
    console.log(result);
});

/* GET home page. */
router.get('/',landing.get_landing);
router.post('/',landing.submit_lead);




module.exports = router;
