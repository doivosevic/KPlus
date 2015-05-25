var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var request = require('request');

var connection = mysql.query({
    host     : '104.131.169.123',
    user     : 'guest',
    database : 'kplus',
    port     : '3306'
});

var myquery = "SELECT name, id FROM products WHERE LOCATE('onster', name) <> 0 LIMIT 100;";

result = {};

/* GET users listing. */
router.get('/query', function(req, res, next) {
    connection.query(myquery, function(err, rows, fields) {
        if (err) {
        	console.log("err :" + err);
        	res.send(err);
        }
        else res.send(rows);
    });
});

module.exports = router;