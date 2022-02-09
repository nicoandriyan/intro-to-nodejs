const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    console.log('app sedang berjalan');
    next();
});

app.use('/table', (req, res, next) => {
    const shirt = true;
    const shoes = true;
    if (shirt && shoes) {
        next();
    } else {
        res.send('gagal');
    }
});

app.get('/table', function(req, res, next) {
    const shirt = true;
    const shoes = true;
    if (shirt && shoes) {
        next();
    }
    res.send('success table 1');
});

app.get('/table', function(req, res) {
    res.send('welcome to table 2');
});

app.get('/', function(req, res) {
    res.send('welcome');
});

app.get('/menu/:isiMenu/kelengkapan/:isiKelengkapan', function(req, res) {
    const menu = req.params.isiMenu
    const kelengkapan = req.params.isiKelengkapan
    if (menu == 1) {
        if (kelengkapan == 'y') {
            res.send(`boleh duduk`);
        } else {
            res.send('tidak boleh duduk');
        }
    } else if (menu == 2) {
        res.send(`makanan ${kelengkapan} anda di anter sesuai pesanan`)
    } else if (menu == 3) {
        res.send(`berhasil membayar ${kelengkapan}`)
    }
});

app.listen(3000, function() {
    console.log('server jalan di 3000');
});
