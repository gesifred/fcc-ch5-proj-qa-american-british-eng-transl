const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
suite('Unit Tests', () => {
	/**
	 * mangoes are my favorite fruit. 
I ate Yogurt for breakfast.
We had a party at my friend's condo
Can you toss this in the trashcan for me?
The parking lot was full.
Like a high tech Rube Goldberg machine.
To play hooky means to skip class or work.
No mr. Bond, I expect you to die.
dr. Grosh will see you now.
Lunch is at 12:15 today 
	 */
	test("Translate Mangoes are my favorite fruit. to British English", function () {
		assert.equal("Mangoes are my <span class=\"highlight\">favourite</span> fruit.", translator.americanToBritish("Mangoes are my favorite fruit."));
	});
	test("Translate I ate yogurt for breakfast. to British English", function () {
		assert.equal("I ate <span class=\"highlight\">yoghurt</span> for breakfast.", translator.americanToBritish("I ate yogurt for breakfast."));
	});
	test("Translate We had a party at my friend's condo. to British English", function () {
		assert.equal("We had a party at my friend's <span class=\"highlight\">flat</span>.", translator.americanToBritish("We had a party at my friend's condo."));
	});
	test("Translate Can you toss this in the trashcan for me? to British English", function () {
		assert.equal("Can you toss this in the <span class=\"highlight\">bin</span> for me?", translator.americanToBritish("Can you toss this in the trashcan for me?"));
	});
	test("Translate The parking lot was full. to British English", function () {
		assert.equal("The <span class=\"highlight\">car park</span> was full.", translator.americanToBritish("The parking lot was full."));
	});
	test("Translate Like a high tech Rube Goldberg machine. to British English", function () {
		assert.equal("Like a high tech <span class=\"highlight\">Heath Robinson device</span>.", translator.americanToBritish("Like a high tech Rube Goldberg machine."));
	});
	test("Translate To play hooky means to skip class or work. to British English", function () {
		assert.equal("To <span class=\"highlight\">bunk off</span> means to skip class or work.", translator.americanToBritish("To play hooky means to skip class or work."));
	});
	test("Translate No Mr. Bond, I expect you to die. to British English", function () {
		assert.equal("No <span class=\"highlight\">Mr</span> Bond, I expect you to die.", translator.americanToBritish("No Mr. Bond, I expect you to die."));
	});
	test("Translate Dr. Grosh will see you now. to British English", function () {
		assert.equal("<span class=\"highlight\">Dr</span> Grosh will see you now.", translator.americanToBritish("Dr. Grosh will see you now."));
	});
	test("Translate Lunch is at 12:15 today. to British English", function () {
		assert.equal("Lunch is at <span class=\"highlight\">12.15</span> today.", translator.americanToBritish("Lunch is at 12:15 today."));
	});
	/***
	 * 
	 */
	/*
	We watched the footie match for a while.
	Paracetamol takes up to an hour to work.
	First, caramelise the onions.
	I spent the bank holiday at the funfair.
	I had a bicky then went to the chippy.
	I've just got bits and bobs in my bum bag.
	The car boot sale at Boxted Airfield was called off.
	Have you met Mrs Kalyani?
	Prof Joyner of King's College, London.
	Tea time is usually around 4 or 4.30.
	*/
	test("Translate We watched the footie match for a while. to American English", function () {
		assert.equal("We watched the <span class=\"highlight\">soccer</span> match for a while.", translator.britishToAmerican("We watched the footie match for a while."));
	});
	test("Translate Paracetamol takes up to an hour to work. to American English", function () {
		assert.equal("<span class=\"highlight\">Tylenol</span> takes up to an hour to work.", translator.britishToAmerican("Paracetamol takes up to an hour to work."));
	});
	test("Translate First, caramelise the onions. to American English", function () {
		assert.equal("First, <span class=\"highlight\">caramelize</span> the onions.", translator.britishToAmerican("First, caramelise the onions."));
	});
	test("Translate I spent the bank holiday at the funfair. to American English", function () {
		assert.equal("I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.", translator.britishToAmerican("I spent the bank holiday at the funfair."));
	});
	test("Translate I had a bicky then went to the chippy. to American English", function () {
		assert.equal("I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.", translator.britishToAmerican("I had a bicky then went to the chippy."));
	});
	test("Translate I've just got bits and bobs in my bum bag. to American English", function () {
		assert.equal("I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.", translator.britishToAmerican("I've just got bits and bobs in my bum bag."));
	});
	test("Translate The car boot sale at Boxted Airfield was called off. to American English", function () {
		assert.equal("The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.", translator.britishToAmerican("The car boot sale at Boxted Airfield was called off."));
	});
	test("Translate Have you met Mrs Kalyani? to American English", function () {
		assert.equal("Have you met <span class=\"highlight\">Mrs.</span> Kalyani?", translator.britishToAmerican("Have you met Mrs Kalyani?"));
	});
	test("Translate Prof Joyner of King's College, London. to American English", function () {
		assert.equal("<span class=\"highlight\">Prof.</span> Joyner of King's College, London.", translator.britishToAmerican("Prof Joyner of King's College, London."));
	});
	test("Translate Tea time is usually around 4 or 4.30. to American English", function () {
		assert.equal("Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.", translator.britishToAmerican("Tea time is usually around 4 or 4.30."));
	});
	/**
	 *    */
	
	test("Highlight translation in Mangoes are my favorite fruit.", function () {
		assert.equal("Mangoes are my <span class=\"highlight\">favourite</span> fruit.", translator.americanToBritish("Mangoes are my favorite fruit."));
	});
	test("Highlight translation in I ate yogurt for breakfast.", function () {
		assert.equal("I ate <span class=\"highlight\">yoghurt</span> for breakfast.", translator.americanToBritish("I ate yogurt for breakfast."));
	});
	test("Highlight translation in We watched the footie match for a while.", function () {
		assert.equal("We watched the <span class=\"highlight\">soccer</span> match for a while.", translator.britishToAmerican("We watched the footie match for a while."));
	});
	test("Highlight translation in Paracetamol takes up to an hour to work.", function () {
		assert.equal("<span class=\"highlight\">Tylenol</span> takes up to an hour to work.", translator.britishToAmerican("Paracetamol takes up to an hour to work."));
	});

});
