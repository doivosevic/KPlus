var XMLHttpRequest = require('xhr2');
var fs = require('fs');

var cd = new Date();
var datetime = cd.getDay() + "_" + cd.getMonth() + "_" + cd.getFullYear() + "-" + cd.getHours() + "_" + cd.getMinutes() + "_" + cd.getSeconds();

var request = new XMLHttpRequest();
var path="http://online.konzum.hr/v2/categories/60006861/products?filter%5Bshow%5D=all&filter%5Bsubcategory_id%5D=&filter%5Bsort_field%5D=name&filter%5Bsort_type%5D=asc&filter%5Bprice%5D%5Bmin%" +
				"5D=0&filter%5Bprice%5D%5Bmax%5D=110&filter%5Bsort%5D=nameAsc&per_page=1&page=1&time=1427296297983";
request.open("GET", path, true);
request.onreadystatechange = function() { fs.writeFileSync('konzum_' + datetime + '.dump', request.response); };
request.setRequestHeader('Accept', 'application/json, text/plain');
request.setRequestHeader('X-XSRF-TOKEN', '+0XwM+AXSyH5iaDVkRJJl5E5t9AU7Dpp94KlEv4OTuM=');
//request.setRequestHeader('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36');
//request.setRequestHeader('Referer', 'http://online.konzum.hr/');
//request.setRequestHeader('Accept-Encoding', 'gzip, deflate, sdch');
request.setRequestHeader('Accept-Language', 'en-US,en;q=0.8,hr;q=0.6,sr;q=0.4,de;q=0.2,bs;q=0.2');
//request.setRequestHeader('Cookie', '_ws_ss=true; cw-cookieInfo=true; _ws_vt=grid; XSRF-TOKEN=%2B0XwM%2BAXSyH5iaDVkRJJl5E5t9AU7Dpp94KlEv4OTuM%3D; _gat=1;_ga=GA1.2.87207288.1424964444; WEBSHOP_COOKIE_online.konzum.hr=R3384563411; konzum_hr_wsm_auth_token=0548b68059de89a0d3d3f3dd68a55ba6; _ws-rails_session_id=BAh7DUkiD3Nlc3Npb25faWQGOgZFRkkiJTE5YjY2ZDg2NzQ0YjE0MzI0NzE1OWQ0YjVmOWEyODE3BjsAVEkiFWN1cnJlbnRfbG9jYXRpb24GOwBGSSIB1Gh0dHA6Ly9vbmxpbmUua29uenVtLmhyL3YyL2NhdGVnb3JpZXMvNjAwMDY4NjEvcHJvZHVjdHM%2FY2F0ZWdvcnlfaWQ9NjAwMDY4NjEmZmlsdGVyJTVCcHJpY2UlNUQlNUJtYXglNUQ9MTEwJmZpbHRlciU1QnNob3clNUQ9YWxsJmZpbHRlciU1QnNvcnQlNUQ9bmFtZUFzYyZmaWx0ZXIlNUJzb3J0X2ZpZWxkJTVEPW5hbWUmcGVyX3BhZ2U9MTgmdGltZT0xNDI1MDYzMTU4MzU3BjsARkkiGHByb2R1Y3RzX3NvcnRfZmllbGQGOwBGSSIJbmFtZQY7AFRJIhdwcm9kdWN0c19zb3J0X3R5cGUGOwBGSSIIYXNjBjsAVEkiHHRvcF9wcm9kdWN0c19zb3J0X2ZpZWxkBjsARkkiD3BvcHVsYXJpdHkGOwBUSSIbdG9wX3Byb2R1Y3RzX3NvcnRfdHlwZQY7AEZJIghhc2MGOwBUSSIQX2NzcmZfdG9rZW4GOwBGSSIxKzBYd00rQVhTeUg1aWFEVmtSSkpsNUU1dDlBVTdEcHA5NEtsRXY0T1R1TT0GOwBGSSIWcHJldmlvdXNfbG9jYXRpb24GOwBGSSIB1Gh0dHA6Ly9vbmxpbmUua29uenVtLmhyL3YyL2NhdGVnb3JpZXMvNjAwMDY4NjEvcHJvZHVjdHM%2FY2F0ZWdvcnlfaWQ9NjAwMDY4NjEmZmlsdGVyJTVCcHJpY2UlNUQlNUJtYXglNUQ9MTEwJmZpbHRlciU1QnNob3clNUQ9YWxsJmZpbHRlciU1QnNvcnQlNUQ9bmFtZUFzYyZmaWx0ZXIlNUJzb3J0X2ZpZWxkJTVEPW5hbWUmcGVyX3BhZ2U9MTgmdGltZT0xNDI1MDYzMTU4MzU3BjsARg%3D%3D--7ddcfed9bfa8d3717728d8ea83efca2debd1640c');
request.setRequestHeader('If-None-Match', '2582612db81b4f4d6addcfcc3df6ed9e');
request.send(null);

/*
POST /Step/5 HTTP/1.1
Host: hackingchallenge.azurewebsites.net
Connection: keep-alive
Content-Length: 11
Cache-Control: max-age=0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*;q=0.8
Origin: http://hackingchallenge.azurewebsites.net
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Referer: http://hackingchallenge.azurewebsites.net/Step/5
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.8,hr;q=0.6,sr;q=0.4,de;q=0.2,bs;q=0.2
Cookie: ai_user=780e7a9acf2545b4b23b0c4511d83583|2015-03-18T12:03:59.8134181+00:00; ARRAffinity=8ba7efa192b900c707bc239d90c64edb5cfec0560c5cec73bbbe1a0d677835eb; HackingChallenge=D4CC4ECA39111C4E5754FCC38C464A375DA9D172CE740E70C94E8257C5575E2FE45F723D73BCDEEDCB68981C632B4B1CCE1A59E3A2A5BF6C008CFBA357EE3BA497E55CDB9F7C14A1AAD3BE7D53D00941C6517A472093DF877B4A24E11474FC7FDF13EDD255F83AED52707BB766583ABE050FA71BB836EF337156C4B4450F7EB72AA24EB7A9A5936F54A289A457BF9C795A41E1B18DFC987E424F7FB6069E60D9; _gat=1; _ga=GA1.3.589979735.1426680240; ai_session=dbcb02dd7a6d4c7cb51bcdf7efd27b3b|2015-03-18T12:03:59.813Z|2015-03-18T12:15:25.983Z
*/

// writeFile "testdump.txt" $ show $ (\ (JSArray a) -> a) $ fromJust $ lookup "products" $ fromJSObject $ (\ (JSObject a) -> a) $ (\ (Ok a) -> a) $ decode b