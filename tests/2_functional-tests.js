const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  
  suite('POST /api/translate with text and locale fields ', function () {

    test('Translation with text and locale fields: POST request to /api/translate', function (done) {
      chai.request(server)
        .post("/api/translate")
        .send({
          text: 'Mangoes are my Favorite fruit.',
          locale: 'american-to-british'
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.translation, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.")
          done();
        })
    });
  });
  suite('POST /api/translate with text and invalid locale field', function () {
    test('Translation with text and invalid locale field: POST request to /api/translate', function (done) {
      chai.request(server)
        .post("/api/translate")
        .send({
          text: 'Whatever text ',
          locale: 'some-other-locale'
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, "Invalid value for locale field")
          done();
        })
    });
  });
  suite('POST /api/translate with missing text field', function () {
    test('Translation with missing text field: POST request to /api/translate', function (done) {
      chai.request(server)
        .post("/api/translate")
        .send({
          locale: 'some-other-locale'
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, "Required field(s) missing")
          done();
        })
    });
  });
  suite('POST /api/translate with missing locale field', function () {
    test('Translation with missing locale field: POST request to /api/translate', function (done) {
      chai.request(server)
        .post("/api/translate")
        .send({
          text: 'Whatever text '
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, "Required field(s) missing")
          done();
        })
    });
  });
  suite('POST /api/translate with empty text', function () {
    test('Translation with empty text: POST request to /api/translate', function (done) {
      chai.request(server)
        .post("/api/translate")
        .send({
          text: '',
          locale: 'american-to-british'
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, "No text to translate")
          done();
        })
    });
  });
  suite('POST /api/translate with text that needs no translation', function () {
    test('Translation with text that needs no translation: POST request to /api/translate', function (done) {
      chai.request(server)
        .post("/api/translate")
        .send({
          text: 'Everything looks good to me!',
          locale: 'american-to-british'
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.translation, "Everything looks good to me!")
          done();
        })
    });
  });

});
