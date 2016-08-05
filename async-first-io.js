// First asynchronous I/O using Node.js
// Ky-Cuong L. Huynh
// 4 August 2016

const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, (err, contents) => {
    if (err) throw err;
    // See explanation of line count from first-io.js
    const lines = contents.toString().split('\n');
    const numLines = lines.length - 1

    console.log(numLines);
});
