// test file
var assert = require('assert');
var fs = require('fs');
eval.apply(this, [fs.readFileSync('./main.js').toString()]);
