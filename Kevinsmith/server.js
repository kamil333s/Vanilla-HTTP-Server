'use strict';

var http = require('http');
var fs = require('fs');
  
var server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    var date = new Date();
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('The time is ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    return res.end();
  }

  var urlArray = req.url.split('/');
  // urlArray looks like [ '', 'greet', 'name']
  if (req.method === 'GET' && urlArray[1] === 'greet' && urlArray.length === 3) {
    var name = urlArray.pop();
    res.writeHead(200, {'content-type': 'text/html'}) ;
    res.write(name + ', Greetings and Felicitations! Hip Hip Hoorah. Tallyho!');
    return res.end();
  } else if (req.method === 'POST' && req.url === '/greet') {
    req.on('data', (data) => {
      var json = JSON.parse(data);

      res.writeHead(200, {'content-type': 'text/html'}) ;
      res.write(json.name + ', Greetings and Felicitations! Hip Hip Hoorah. Tallyho!');
      res.end();
    });// on
  } else {
    res.writeHead(404, {'content-type': 'text/html'}) ;
    res.write('404- file not found');
    res.end();
  }
}).listen(3000, () => console.log('server up on 3000'));