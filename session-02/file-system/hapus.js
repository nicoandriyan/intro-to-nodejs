var fs = require('fs');

fs.unlink('rubahnama.txt', function(err) {
    if (err) throw err;
    console.log('file sudah dihapus!');
});