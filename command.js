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
	.option('-u, --url <url>','The url of the Heimdall API documentation')
	.parse(process.argv);

if (!command.url) command.help();
var timeout = parseInt(command.timeout)||30000;

// --------------------------------------------------------------------------
// Run the tests
ragnarok.run(command.url,timeout,function(err,result){
	if(err) {
		console.error(err);			
	} else {
		console.log('Success!');
	}
	process.exit();
});