var fs = require('fs');

fs.rename('buatbaru.txt', "rubahnama.txt", function(err) {
    if (err) throw err;
    console.log('nama file telah dirubah');
});
