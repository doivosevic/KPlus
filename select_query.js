var mysql = require('mysql');
var request = require('request');

var connection = mysql.createPool({
	host	: '104.131.169.123',
	user	: 'guest',
	database : 'kplus',
	port 	 : '3306',
	connectionLimit: 10
});

var myquery = "SELECT DISTINCT name, id FROM products WHERE LOCATE('onster', name) <> 0 LIMIT 100;";

result = {};

connection.query(myquery, function(err, rows, fields) {
	if (err) console.log("err :" + err);
	else console.log(rows);
	result = rows;
});
