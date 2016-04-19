'use strict';

var http = require('http');
var fs = require('fs');
  
var server = http.createServer((req, res) => {
  // res.setHeader('Content-Type', 'application/json');
  // res.sestatus(200); 
  if (req.method === 'GET' && req.url === '/time') {
    var date = new Date();
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('The time is ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    return res.end();
  };

  var urlArray = req.url.split('/');
  // urlArray looks like [ '', 'greet', 'name']
  console.log('req.Method: ', req.method);
  console.log('urlArray[1]: ', urlArray[1] );
  console.log('urlArray.length: ', urlArray.length );
  if (req.method === 'GET' && urlArray[1] === 'greet' && urlArray.length === 3) {
    var name = urlArray.pop();
    res.writeHead(200, {'content-type': 'text/html'}) ;
    res.write(name + ', Greetings and Felicitations! Hip Hip Hoorah. Tallyho!');
    // return res.end();

    // var index = fs.createReadStream(__dirname + '/public/index.html')
    // return index.pipe(res);
  };



  // if (req.method === 'POST' && req.url === '/greet') {
  //   req.on('data', (data) => {
  //     console.log(data.toString('utf-8'));
  //     console.log(JSON.parse(data));
  //     res.end();
  //   });// on
  //     res.end();
  //   }; // if


    res.writeHead(404, {'content-type': 'text/html'}) 
    res.write('404- file not found');
    res.end();

}).listen(3000, () => console.log('server up on 3000'));