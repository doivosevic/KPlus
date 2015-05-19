var request = require('request');
var fs = require('fs');

var options = {
    url: 'http://online.konzum.hr/v2/categories/60006861/products?filter%5Bshow%5D=all&filter%5Bsort%5D=nameAsc&filter%5Bsort_field%5D=name&per_page=24&time=1427230914707',
    headers: { 
    	  'Accept': 'application/json, text/plain'
		, 'X-XSRF-TOKEN': '+0XwM+AXSyH5iaDVkRJJl5E5t9AU7Dpp94KlEv4OTuM='
		, 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36'
		, 'Referer': 'http://online.konzum.hr/'
		, 'Accept-Encoding': 'gzip, deflate, sdch'
		, 'Accept-Language': 'en-US,en;q=0.8,hr;q=0.6,sr;q=0.4,de;q=0.2,bs;q=0.2'
		, 'Cookie': '_ws_ss=true; cw-cookieInfo=true; _ws_vt=grid; XSRF-TOKEN=%2B0XwM%2BAXSyH5iaDVkRJJl5E5t9AU7Dpp94KlEv4OTuM%3D; _gat=1;_ga=GA1.2.87207288.1424964444; WEBSHOP_COOKIE_online.konzum.hr=R3384563411; konzum_hr_wsm_auth_token=0548b68059de89a0d3d3f3dd68a55ba6; _ws-rails_session_id=BAh7DUkiD3Nlc3Npb25faWQGOgZFRkkiJTE5YjY2ZDg2NzQ0YjE0MzI0NzE1OWQ0YjVmOWEyODE3BjsAVEkiFWN1cnJlbnRfbG9jYXRpb24GOwBGSSIB1Gh0dHA6Ly9vbmxpbmUua29uenVtLmhyL3YyL2NhdGVnb3JpZXMvNjAwMDY4NjEvcHJvZHVjdHM%2FY2F0ZWdvcnlfaWQ9NjAwMDY4NjEmZmlsdGVyJTVCcHJpY2UlNUQlNUJtYXglNUQ9MTEwJmZpbHRlciU1QnNob3clNUQ9YWxsJmZpbHRlciU1QnNvcnQlNUQ9bmFtZUFzYyZmaWx0ZXIlNUJzb3J0X2ZpZWxkJTVEPW5hbWUmcGVyX3BhZ2U9MTgmdGltZT0xNDI1MDYzMTU4MzU3BjsARkkiGHByb2R1Y3RzX3NvcnRfZmllbGQGOwBGSSIJbmFtZQY7AFRJIhdwcm9kdWN0c19zb3J0X3R5cGUGOwBGSSIIYXNjBjsAVEkiHHRvcF9wcm9kdWN0c19zb3J0X2ZpZWxkBjsARkkiD3BvcHVsYXJpdHkGOwBUSSIbdG9wX3Byb2R1Y3RzX3NvcnRfdHlwZQY7AEZJIghhc2MGOwBUSSIQX2NzcmZfdG9rZW4GOwBGSSIxKzBYd00rQVhTeUg1aWFEVmtSSkpsNUU1dDlBVTdEcHA5NEtsRXY0T1R1TT0GOwBGSSIWcHJldmlvdXNfbG9jYXRpb24GOwBGSSIB1Gh0dHA6Ly9vbmxpbmUua29uenVtLmhyL3YyL2NhdGVnb3JpZXMvNjAwMDY4NjEvcHJvZHVjdHM%2FY2F0ZWdvcnlfaWQ9NjAwMDY4NjEmZmlsdGVyJTVCcHJpY2UlNUQlNUJtYXglNUQ9MTEwJmZpbHRlciU1QnNob3clNUQ9YWxsJmZpbHRlciU1QnNvcnQlNUQ9bmFtZUFzYyZmaWx0ZXIlNUJzb3J0X2ZpZWxkJTVEPW5hbWUmcGVyX3BhZ2U9MTgmdGltZT0xNDI1MDYzMTU4MzU3BjsARg%3D%3D--7ddcfed9bfa8d3717728d8ea83efca2debd1640c'
		, 'If-None-Match': '2582612db81b4f4d6addcfcc3df6ed9e'
		, 'Referer': 'http://online.konzum.hr/'
		, 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36'
		, 'X-XSRF-TOKEN': '+0XwM+AXSyH5iaDVkRJJl5E5t9AU7Dpp94KlEv4OTuM='
	}
};

function callback(error, response, body) {
    /*if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info.stargazers_count + " Stars");
        console.log(info.forks_count + " Forks");
    }*/
    var cd = new Date();
	var datetime = cd.getDay() + "_" + cd.getMonth() + "_" + cd.getFullYear() + "-" + cd.getHours() + "_" + cd.getMinutes() + "_" + cd.getSeconds();
	console.log(datetime);
    //console.log(error);
    //console.log(response);
    //console.log(body);
    fs.writeFileSync('konzum_' + datetime + '.dump', body);
    resp = response;
    bod = body;
}

request(options, callback);