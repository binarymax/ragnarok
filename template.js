var assert = require('assert');
var should = require('should');
var ragnarok = require('ragnarok');
var tools = ragnarok.tools;
var client = ragnarok.client;

/*{{url}}*/

/*{{credentials}}*/

var init = function(connection){

/*{{body}}*/

};

client(url,credentials,function(err,connection) {
	if(err) {
		console.log(err);
	} else {
		init(session);
	}
});