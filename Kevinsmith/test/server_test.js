var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
// var fs = require('fs');

var request = chai.request;
var expect = chai.expect;
require(__dirname + '/../server');

describe('Vanilla HTTP server tests', () => {

  it('should respond to /time with the current time', (done) => {
    request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).have.status(200);
      // expect(res).to.have.header('content-type'. 'application/json');
      // console.log('res.text:', res.text);
      expect(res.text).to.contain('The time is ');
      done();
    });// end
  });// it
  
  it('/greet/kevin should send back "kevin, Greetings and Felicitations! Hip Hip Hoorah. Tallyho!"', (done) =>{
    request('localhost:3000')
    .get('/greet/kevin')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).have.status(200);
      expect(res.text).to.eql('kevin, Greetings and Felicitations! Hip Hip Hoorah. Tallyho!');
      done();
    });// end
  });// it

  it('should send back an error page', (done) =>{
    request('localhost:3000')
    .get('/blah')
    .end((err, res) => {
      expect(err).to.not.eql(null);
      expect(res).have.status(404);
      expect(res.text).to.eql('404- file not found');
      done();
    });// end
  });// it

});// describe