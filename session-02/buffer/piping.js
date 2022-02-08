// include file system (fs) modul supaya bisa menggunakan file
const fs = require('fs');

// membuat readable stream
let readableStream = fs.createReadStream('input.txt');

// membuat writable stream
let writeableStream = fs.createWriteStream('output.txt');

// pipe read and write
// read input.txt dan write daa ke output.txt
readableStream.pipe(writeableStream);

// menandakan proses piping selesai
console.log('selesai piping!');