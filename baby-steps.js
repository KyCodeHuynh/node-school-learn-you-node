// Don't forget to use strict mode!
// And semicolons!
"use strict";

    // process is the global object

// The argv property holds all the CLI args
// argv[0] = /path/to/node
// argv[1] = /path/to/program
// argv[2] = first command-line arg

    // We can view how these arguments will look

// console.log(process.argv);
// console.log((process.argv.length.toString() - 2) + ' arguments');
// for (let i = 2; i < process.argv.length; i++) {
//     console.log('Arg #' + Number(i) + ':' + Number(process.argv[i]));
// }

    // The challenge is to sum up the given arguments and print the result

let sum = 0;
for (let i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}

// We need to remember to coerce types as needed
console.log(String(sum));
