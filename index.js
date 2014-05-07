// Ragnarok moderator

var Ragnarok = module.exports = {};

var fs = require('fs');
var should = require('should');
var client = require('./client');
var tools = require('./tools');

Ragnarok.tools = tools;
Ragnarok.client = client;

var connection = null;

var tmplt = function(str,key,val) {
	return str.replace('/*{{'+key+'}}*/',val);
}

var templates = {
	suite:fs.readFileSync('./template.js','utf8'),
	describe:fs.readFileSync('./describe.js','utf8'),
	it:fs.readFileSync('./it.js','utf8')
}

var it = function(method) {

	var itstr = tmplt(templates.it,'it',method.description);

	itstr = tmplt(itstr,'verb',method.verb.toLowerCase());

	itstr = tmplt(itstr,'url',method.url);

	return itstr;

}

var describe = function(route) {

	var routestr = tmplt(templates.describe,'describe',route.description);

	methodstr = '';

	for(var method in route.methods) {

		methodstr += it(route.methods[method]);

	}

	return tmplt(routestr,'its',methodstr);

}

var build = function(url,credentials,api,callback) {

	tools.testOData(api);

	var str = fs.readFileSync('./template.js','utf8');

	str = tmplt(str,'url','var url = "'+url+'";');

	str = tmplt(str,'credentials','var credentials = '+JSON.stringify(credentials)+';');

	var body = '';

	for(var i=0,r=api.d.results,l=r.length;i<l;i++) {
		body += describe(r[i]);
	}

	str = tmplt(str,'body',body);

	console.log(str);

};

// --------------------------------------------------------------------------
var run = Ragnarok.run = function(url,milliseconds,credentials,callback) {
	
	client(url,credentials,function(err,session){
		if(err) {
			callback(err);
		} else {
			connection = session;
			build(url,credentials,session.api,callback);
		}
	});
};