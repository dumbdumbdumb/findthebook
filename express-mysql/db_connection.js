var mysql = require('mysql')

var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'dkssud12',
    database: 'findthebook'
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("good")
});

module.exports = connection;




