//bring in assertion library
const assert = require('chai').assert;
//require app.js
const addition = require('../app').addition;

//create a test
describe('App',function(){
	//test case for a value and description
	it('app should return the sum', function(){
		let result = addition();
		assert.equal(result, 11);
	});

	//case to check for a specific type
	it('app should return integer type', function(){
		let result = addition();
		assert.typeOf(result, 'number');
	});

	// case: if number is negavity
	it('number should be over 0', function(){
		let result = addition();
		assert.isBelow(0, -3);
	});
})