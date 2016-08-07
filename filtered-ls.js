// Filtered version of the 'ls' command
// Ky-Cuong L. Huynh
// 7 August 2016

// We're going to make an 'ls'' that only 
// displays files with a particular extension

// Node.js doesn't support 'import' yet
'use strict';
const fs = require('fs');
const path = require('path');

// Commandline arguments:
// 1: path to directory
// 2: extension to filter on
// Example: node filtered-ls.js ~/Downloads rb
// should be equivalent to ls ~/Downloads/*.rb 
// in displaying every file ending with that extension.
const directory = process.argv[2];
// path.extname() includes a dot: '.html', but the commandline arg won't
const selectedExtension = '.' + process.argv[3];

// Grab all the files in that directory,
// then check each of their extensions
fs.readdir(directory, (err, files) => {
    if (err) throw err;
    // files is an array, and thus has filter()
    files.forEach((file) => {
        if (path.extname(file) === selectedExtension) {
            console.log(file);
        }
    });
});

// Alternative iterative solution
    // function hasSelectedExtension (fileName) {
    //     return path.extname(fileName) === selectedExtension;
    // }
    // 
    // if (files !== undefined) {
    //     var results = files.filter(hasSelectedExtension);
    //     // for..of is better for iterables, as for..in does not
    //     // return the value but the indices, and not in any particular order
    //     // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#Array_iteration_and_for...in
    //     for (const result of results) {
    //         console.log(result);
    //     }
    // }