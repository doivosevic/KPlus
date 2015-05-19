var XMLHttpRequest = require('xhr2');
var fs = require('fs');

var cd = new Date();
var datetime = cd.getDay() + "_" + cd.getMonth() + "_" + cd.getFullYear() + "-" + cd.getHours() + "_" + cd.getMinutes() + "_" + cd.getSeconds();

categoryPath = "http://online.konzum.hr/v2/categories?time=1427364543401";

firstPathHalf = "http://online.konzum.hr/v2/";
secontPathHalf = "?filter%5Bshow%5D=all&filter%5Bsort%5D=nameAsc&filter%5Bsort_field%5D=name&per_page=200&time=1427648207902"

parseWebsite(categoryPath, handleData)

categories = {};
// http://online.konzum.hr/v2/categories/60004323/products?filter%5Bshow%5D=all&filter%5Bsort%5D=nameAsc&filter%5Bsort_field%5D=name&per_page=200&time=1427648207902
// http://online.konzum.hr/#!/categories/60004323/hrana?show=all&sort_field=name&sort=nameAsc&max_price=22290&page=1&per_page=5430

function handleData(response) {
	if (response === null) return;
	data = JSON.parse(response);
	for (var i = 0; i < data.length; ++i) { 
		categories[data[i].id] = data[i].name;
		parseWebsite(firstPathHalf + data[i].products_path + secontPathHalf, storeCategory);
	}
	console.log(categories);
}

function storeCategory(response, path) {
	if (response === null) return;
	data = JSON.parse(response);
	var categoryName = path.match(/\d+\/\w+\?/)[0];
	categoryName = categoryName.match(/\d+/)[0];
	var products = data.products;
	var productNames = products.map(function(curr) { return curr.name; });
	fs.writeFileSync('dump/' + datetime + '_' + categories[categoryName.toString()] + '.dump', response);
	console.log(path);
	console.log(categoryName);
	console.log(products.length);
}

function parseWebsite(webPath, handler) {
	var request = new XMLHttpRequest();
	request.open("GET", webPath, true);
	request.onreadystatechange = function() { handler(request.response, webPath); };
	request.setRequestHeader('Accept', 'application/json, text/plain');
	request.setRequestHeader('X-XSRF-TOKEN', '+0XwM+AXSyH5iaDVkRJJl5E5t9AU7Dpp94KlEv4OTuM=');
	request.setRequestHeader('Accept-Language', 'en-US,en;q=0.8,hr;q=0.6,sr;q=0.4,de;q=0.2,bs;q=0.2');
	request.setRequestHeader('If-None-Match', '2582612db81b4f4d6addcfcc3df6ed9e');
	request.send(null);
}