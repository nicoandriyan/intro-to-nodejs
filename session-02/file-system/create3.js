var fs = require('fs');
fs.open("buatbarulagi.txt", 'w+', function(err, file) {
    if (err) throw err;
    
    // kontent yg akan kita tulis ke file
    let content = 'Hello saya student di hacktiv8';

    // tulis kontent ke file
    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log('sukses yg ketiga');
    });
    // baca file
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        console.log(data.toString('utf-8'));
    });
});