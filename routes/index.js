var express = require('express');
var router = express.Router();

var landing  = require('../controllers/landing');
var db_connection = require('../express-mysql/db_connection');


/*DB query test*/
db_connection.query("select c.required_book_id\n" +
    "from students s, classes c, schedules sc\n" +
    "where s.student_id = '6004' and s.student_id = sc.student_id and sc.class_id = c.class_id\n" +
    ";\n", function (err, result) {
    if (err) throw err;
    console.log(result);
});

/* GET home page. */
router.get('/',landing.get_landing);
router.post('/',landing.submit_lead);




module.exports = router;
