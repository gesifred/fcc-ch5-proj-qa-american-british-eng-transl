'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body.text;
      let locale = req.body.locale;

      if (text === undefined || locale === undefined) {
        return res.send({ error: 'Required field(s) missing' });
      }
      if (!text) {//text == null
        return res.send({ error: 'No text to translate' });
      }
      if (locale == "american-to-british") {
        let testo = translator.americanToBritish(text);
        if (testo == text) {
          return res.send({ text: text, translation: "Everything looks good to me!" })
        } else {
          return res.send({ text: text, translation: testo })
        }
      }
      if (locale == "british-to-american") {
        let testo = translator.britishToAmerican(text);
        if (testo == text) {
          return res.send({ text: text, translation: "Everything looks good to me!" })
        } else {
          return res.send({ text: text, translation: testo })
        }
      }
      return res.send({ error: 'Invalid value for locale field' });
    });
};
