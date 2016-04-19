var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
var fs = require('fs');

var request = chai.HTTP;
var expect = chai.expect;
require(__dirname + '/../server');

describe('Vanilla HTTP server tests', () => {
// var html;
// before(() => {
// fs.readFile(__dirname + '/../public/index.html', (err, data)) ************************************
//   html = data.toString();
//   done();
// })

  it('should respond to /time with the current time', (done) => {
    request('localhost:3000')
    .get('/time');
    .end((err, res) => {
      expect(err).to.equl(null);
      expect(res).have.status(200);
      // expect(res).to.have.header('content-type'. 'application/json');
      expect(res.text).to.match('The time is ');
      done();
    })
  })
  
  it('/greet/kevin should send back "kevin, Greetings and Felicitations! Hip Hip Hoorah. Tallyho!''', (done) =>{
    request('localhost:3000')
    .get('/greet/kevin')
    .end((err, res) => {
      expect(err).to.equl(null);
      expect(res).have.status(200);
      expect(res.text).to.eql('kevin, Greetings and Felicitations! Hip Hip Hoorah. Tallyho!');
      done();
    })

  it('should send back an error page', (done) =>{
    request('localhost:3000')
    .get('/blah')
    .end((err, res) => {
      expect(err).to.not.eql(null);
      expect(res).have.status(404);
      expect(res.text).to.eql('404- file not found');
      done();
    })

  })
})
