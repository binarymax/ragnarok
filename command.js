// Module dependencies
var fs = require('fs');
var command = require('commander');
var ragnarok = require('./index');

// --------------------------------------------------------------------------
// Read in the package.json file:
var package = JSON.parse(fs.readFileSync(__dirname + "/package.json"));

// --------------------------------------------------------------------------
// Initialize cli
command
	.version(package.version)
	.option('-t, --timeout [timeout]','The timeout in milliseconds.')
	.option('-a, --api <api>','The url of the Heimdall application')
	.option('-l, --login [login]','The path of the login resource')
	.option('-u, --username [username]','The username of the account to test with')
	.option('-p, --password [password]','The password of the account to test with')
	.parse(process.argv);

if (!command.api) command.help();
var timeout = parseInt(command.timeout)||30000;

var credentials = {
	login:command.login,
	username:command.username,
	password:command.password
};

// --------------------------------------------------------------------------
// Run the tests
ragnarok.run(command.api,timeout,credentials,function(err,result){
	if(err) {
		console.error(err);			
	} else {
		console.log('Success!');
	}
	process.exit();
});