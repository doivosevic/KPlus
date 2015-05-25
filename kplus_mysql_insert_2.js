var mysql      = require('mysql');
var request = require('request');

var connection = mysql.createPool({
  host     : '104.131.169.123',
  user     : 'root',
  password : 'xxx',
  database : 'xxx',
  port     : '3306',
  connectionLimit: 100
});

function print(x) {console.log(x);}

function queryAFile(i, maxi, files) {
    if (i >= maxi) { return; }
    print("start " + files[i]);
    var link = 'http://localhost:8080/dump/' + files[i];
    request.get(link, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data =JSON.parse(body);
            var products = data['products'];

            for (var j = 0; j < products.length; ++j) {
                var product = products[j];
                var myquery = "INSERT INTO `kplus_complete` (my_category, datum, ";
                var midquery = ") VALUES ('" + link.substring(44).slice(0,-5) + "' ,'" + link.substring(27,37) + "' ," ;
                
                for (var k in product) {
                    //console.log(i + ' :: ' + k);
                    if (typeof product[k] === 'number') var v = product[k];
                    else if (typeof product[k] === 'string') var v = connection.escape("\'" + product[k]+ "\'");
                    else if (typeof product[k] === 'boolean') var v = product[k];
                    else continue;
                    myquery = myquery + "`" + k + "`,";
                    midquery = midquery  + v + ",";

                }
                for (var k in product['price']) {
                    //console.log(i + ' :: ' + k);
                    if (typeof product['price'][k] === 'number') var v = product['price'][k];
                    else if (typeof product['price'][k] === 'string') var v = connection.escape("\'" + product['price'][k]+ "\'");
                    else if (typeof product['price'][k] === 'boolean') var v = product['price'][k];
                    else continue;
                    myquery = myquery + "`" + k + "`,";
                    midquery = midquery  + v + ",";

                }
                myquery = myquery.slice(0,-1);
                midquery = midquery.slice(0, -1);

                myquery = myquery + midquery + ')';

                //print(myquery);

                connection.query(myquery, function (err, rows, fields) {
                    //if (!err) console.log(rows);
                    if (err) {
                        console.log("err " + err);
                    }
                });
                
                
            }
            print("end " + files[i]);
            queryAFile(i+1, maxi, files);
            //connection.end();
        }
        else {
            console.log("err " + error + " :: statusCode " + response.statusCode);
        }
    });
    
}

var files;
request.get('http://localhost:8080/productnames_2.txt', function (error, response, body) {
    files = body.split('\r\n');
    files_for_upload = [];
    var j = 0;
    for (var i = 350; i < 451; ++i){
        files_for_upload[j++] = files[i];
    }
    print(files_for_upload);
    //print(files.length);
    queryAFile(0, files_for_upload.length, files_for_upload);
    //queryAFile(0, 1, [files[11]]);
});
