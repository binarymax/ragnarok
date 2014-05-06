//Gets Heimdall API data from a server
var njord = require('njord');
var url = require('url');

var Client = module.exports = function(root,credentials,callback) {

	var session = njord.session(root);

	session.get('api',function(err,data) {
	
		//Get the API info
		var json = null;

		try{json = JSON.parse(data);} catch(ex) {callback(ex);}
		
		if (json) {

			session.api = json;

			if(credentials && credentials.login && credentials.username && credentials.password) {

				//Login needed for API access
				session.login(credentials.login,credentials.username,credendials.password,function(err){
					err?callback(err):callback(null,session);
				});

			} else {

				//No login needed
				callback(null,session);

			}

		}

	});

};