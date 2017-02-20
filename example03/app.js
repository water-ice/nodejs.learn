var http = require('http'),
  urls = ['baidu.com', 'www.163.com', 'sina.com'];

function fetchPage(url) {
  var start = new Date();
  http.get({ host: url }, function(res) {
    console.log("Got response from: " + url);
    console.log('Request took:', new Date() - start, 'ms');
  });
}

for(var i = 0; i < urls.length; i++) {
  fetchPage(urls[i]);
}