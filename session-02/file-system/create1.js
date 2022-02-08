var fs = require('fs');

// syntax untuk membuat file bernama buatbaru.txt
fs.appendFile('buatbaru.txt', "belajar di hacktiv8", function(err) {
    if (err) throw err;
    console.log('sukses dibuat!');
});