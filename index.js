// Ragnarok moderator

var Ragnarok = module.exports = {};

var mocha = require('mocha');
var should = require('should');
var client = require('./client');

var test = function() {

};

var init = function(api,callback) {
	console.log(api);
	callback(null,api);
};

// --------------------------------------------------------------------------
var run = Ragnarok.run = function(url,milliseconds,callback) {
	client.get(url,function(err,api){
		if(err) {
			callback(err);
		} else {
			init(api,callback);
		}
	});
};