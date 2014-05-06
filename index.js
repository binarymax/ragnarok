// Ragnarok moderator

var Ragnarok = module.exports = {};

var mocha = require('mocha');
var should = require('should');
var client = require('./client');
var connection = null;

var test = function() {

};

var init = function(api,callback) {
	console.log(api);
	callback(null,api);
};

// --------------------------------------------------------------------------
var run = Ragnarok.run = function(url,milliseconds,credentials,callback) {
	
	client(url,credentials,function(err,session){
		if(err) {
			callback(err);
		} else {
			connection = session;
			init(session.api,callback);
		}
	});
};