//bring in assertion library
const assert = require('chai').assert;
const app = require('../app');

//create a test
describe('App',function(){
	//test case for a value and description
	it('app should return hello', function(){
		assert.equal(app(), 12);
	});
})

//create a test - trigger a failure 
describe('App',function(){
	//test case for a value and description
	it('app should return hello', function(){
		assert.equal(app(), 11);
	});
})