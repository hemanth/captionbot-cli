#!/usr/bin/env node
'use strict';
var meow = require('meow');
var captionbotCli = require('./');

var cli = meow([
	'Usage',
	'  $ captionbot [url]',
	'',
	'Examples',
	'  $ captionbot http://imgur.com/B7a15F5.jpg',
	'   I think it\'s a dog in the snow.'
]);

captionbotCli(cli.input[0])
.then(caption => console.log(caption))
.catch(err => console.error(err));
