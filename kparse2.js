var XMLHttpRequest = require('xhr2');
var fs = require('fs');

var cd = new Date();
var datetime = cd.getDay() + "_" + cd.getMonth() + "_" + cd.getFullYear() + "-" + cd.getHours() + "_" + cd.getMinutes() + "_" + cd.getSeconds();

categoryPath = "http://online.konzum.hr/v2/categories?time=1427364543401";

firstPathHalf = "http://online.konzum.hr/v2/";
secontPathHalf = "?show=all&sort_field=name&sort=nameAsc&max_price=1001001&page=1&per_page=24"

parseWebsite(categoryPath, handleData)

categories = {};
// http://online.konzum.hr/#!/categories/60004323/hrana?show=all&sort_field=name&sort=nameAsc&max_price=22290&page=1&per_page=5430

function handleData(response) {
	if (response === null) return;
	data = JSON.parse(response);
	//var cats = data.map(function(curr) { return curr.name; });
	//console.log(cats);
	//console.log(data);
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
	//console.log(categoryName);
	categoryName = categoryName.match(/\d+/)[0];
	//console.log(categoryName);
	//categoryName = categoryName.substring(0, categoryName.length-1);
	var products = data.products;
	var productNames = products.map(function(curr) { return curr.name; });
	fs.writeFileSync('dump/' + datetime + '_' + categories[categoryName.toString()] + '.dump', response);
	console.log(path);
	//console.log(productNames);
	console.log(categoryName);
	//console.log(products);
	console.log(products.length);
}

function parseWebsite(webPath, handler) {
	var request = new XMLHttpRequest();
	request.open("GET", webPath, true);
	//console.log(webPath);
	request.onreadystatechange = function() { handler(request.response, webPath); }; // fs.writeFileSync('konzum_categories_' + datetime + '.dump', request.response); };
	request.setRequestHeader('Accept', 'application/json, text/plain');
	request.setRequestHeader('X-XSRF-TOKEN', '+0XwM+AXSyH5iaDVkRJJl5E5t9AU7Dpp94KlEv4OTuM=');
	request.setRequestHeader('Accept-Language', 'en-US,en;q=0.8,hr;q=0.6,sr;q=0.4,de;q=0.2,bs;q=0.2');
	request.setRequestHeader('If-None-Match', '2582612db81b4f4d6addcfcc3df6ed9e');
	request.send(null);
}