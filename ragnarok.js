#!/usr/bin/env node

/****************************************************************************
*
* Ragnarok - Integration testing for Heimdall APIs
* (c)Copyright 2014, Max Irwin
* MIT License
*
****************************************************************************/

(require.main === module)
	? require('./command')                  // <-- ran from the command line
	: module.exports = require('./index');  // <-- required as a node module