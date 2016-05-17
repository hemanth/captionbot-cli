#!/usr/bin/env node
'use strict';
var meow = require('meow');
var captionbotCli = require('./');

var cli = meow([
	'Usage',
	'  $ captionbot-cli [url]',
	'',
	'Examples',
	'  $ captionbot-cli http://imgur.com/B7a15F5.jpg',
	'  unicorns & rainbows'
]);

captionbotCli(cli.input[0])
.then(caption => console.log(caption))
.catch(err => console.error(err));
