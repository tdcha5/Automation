// the libraries are added 
var assert = require('chai').assert; 
var expect = require('chai').expect; 
var should = require('chai').should(); 

var actual = 2; 
var expected = 2;

// does actual and expected match? Both values are compared 
//assert.equal(actual, expected);
// expect(actual).to.equal(expected); 
actual.should.equal(expected);
