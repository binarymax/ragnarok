var fs = require('fs'),
	url = require('url')
	http = require('http'),
	should = require('should'),
	querystring = require('querystring');

var Tools = module.exports = {};

// -------------------------------
// Test if data is a valid, non-empty oData object
var testOData = Tools.testOData = function(data) {
	data.should.be.an.Object;
	data.should.have.property('d');  
	data.d.should.be.an.Object;
	data.d.should.have.property('__count');
	data.d.should.have.property('results');
	data.d.__count.should.be.a.Number;
	data.d.results.should.be.an.Object;
	data.d.results.should.have.property('length');
	data.d.results.length.should.be.equal(data.d.__count);
};

// -------------------------------
// Test if data is a valid, non-empty oData object
var testODataCount = Tools.testODataCount = function(data,count) {
	testOData(data);
	data.d.__count.should.be.equal(count);
};

// -------------------------------
// Test if data is a valid, non-empty oData object
var testODataNonEmpty = Tools.testODataNonEmpty = function(data) {
	testOData(data);
	data.d.__count.should.be.above(0);
};