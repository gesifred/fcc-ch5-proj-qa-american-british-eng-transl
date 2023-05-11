const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    americanToBritish(text) {
        text = text.charAt(0).toUpperCase() + text.slice(1)
        const regexpWords = /\w{1,}/g;
        const textWords = text.match(regexpWords);
        const fullList = { ...americanOnly, ...americanToBritishSpelling };
        Object.keys(fullList).forEach((el) => {
            //let re = RegExp(`\\b${el}\\b`,"i")
            let re = RegExp(`${el}`, "gi")
            text = text.replace(re, `<span class="highlight">${fullList[el]}</span>`);
        });
        //fix Titles
        Object.keys(americanToBritishTitles).forEach((el) => {
            let re = RegExp(`${el}`, "i");
            let replacement = americanToBritishTitles[el];
            replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1)
            text = text.replace(re, `<span class="highlight">${replacement}</span>`);
        });
        //fix Hours
        let reHour = /(\d{1,2}):(\d{1,2})/g;
        text = text.replace(reHour, `<span class="highlight">$1.$2</span>`);
        return text;
    };

    britishToAmerican(text) {
        text = text.charAt(0).toUpperCase() + text.slice(1)
        const regexpWords = /\w{1,}/g;
        const textWords = text.match(regexpWords);

        //let spellingsAndTitlesList = { ...americanToBritishSpelling }
        Object.values(americanToBritishSpelling).forEach((el) => {
            let term = Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === el);
            let re = RegExp(`${americanToBritishSpelling[term]}`, "i")
            text = text.replace(re, `<span class="highlight">${term}</span>`);
        });
        Object.values(americanToBritishTitles).forEach((el) => {
            let term = Object.keys(americanToBritishTitles).find(key => americanToBritishTitles[key] === el);
            let re = RegExp(`${americanToBritishTitles[term]} `, "i")
            term = term.charAt(0).toUpperCase() + term.slice(1)
            text = text.replace(re, `<span class="highlight">${term}</span> `);
        });
        Object.keys(britishOnly).forEach((el) => {
            let re = RegExp(`\\b${el}\\b`, "gi")
            text = text.replace(re, `<span class="highlight">${britishOnly[el]}</span>`);
        });
        //fix Hours
        let reHour = /(\d{1,2}).(\d{1,2})/g;
        text = text.replace(reHour, `<span class="highlight">$1:$2</span>`);
        return text;
    };
}

module.exports = Translator;
