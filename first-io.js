// Print the number of newlines in the file identified
// by the first command-line argument. Note that this is
// defined as the number of '\n' characters, which matches
// the behavior of the wc command
'use strict';

// var is scoped to the nearest function block,
// meaning it's usable even "before" its declaration.
// This occurs because var declarations are "hoisted"
// to the beginning of the function block.

// For this reason, it's best to match what will end up
// happening anyway and declare everything at the top.
// Welcome back to C89!

// But this ONLY occurs for declarations, NOT initializations!
// use strict enforces declaration beforehand though

// let is scoped to the nearest block (of any kind)
// This is what every sane language does

// ES6 has native modules that use export and import
// instead of this library workaround.
//
// Node has a massive API for talking to the OS: https://nodejs.org/api/
var fs = require('fs');

// readFileSync() is the synchronous version of readFile()
// As such, it doesn't take a callback function and will block
// execution from proceeding forward until it's done
//
// It'll return a Buffer object to efficiently represent
// arbitrary arrays of data. We can also stringify it via .toString()

// Filename is the first user-provided commandline argument
let fileName = process.argv[2];

// We can also get a string via the utf8 option:
// readFileSync(fileName, 'utf8')
let file = fs.readFileSync(fileName);

// Convert to String before any further operations on it
//
// split() splits based on some delimiter (that is eliminated in the output)
// and produces an array of the results. This program is meant
// to match wc -l, so we should count the number of newlines.
// But for input like "test\nlet\nhello", the \n between
// "let" and "hello" still separates them, meaning if we run
// "test\nlet\nhello".split('\n'), we get [ 'test', 'let', 'hello' ]
// That's 3 in length but the correct answer is 2, as there are 2 newlines.
//
// Chaining more than 2-3 function calls quickly produces confusion
let lines = file.toString().split('\n');

// -1 to compensate for the extra element
// We can check by running "node first-io.js LICENSE"
// And compare output to "cat LICENSE | wc -l"
console.log(lines.length - 1);
