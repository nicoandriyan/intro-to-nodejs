const express = require('express');
const path = require('path');
const app = express();

app.use('/', (req, res, next) => {
    console.log('app sedang berjalan');
    next();
});

app.get('/', function(req, res) {
    res.send('welcome');
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/html/index.html'));
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




// app.get('/table/:amount', function(req, res) {
//     var party = req.params.amount
//     if (party == 1) {
//         res.send('halo nama saya nico')
//     } else if (party == 2) {
//         res.send('rumah saya di magelang')
//     } else {
//         res.send('we are searching for your table for '+ party + '!')
//     }
// });

// app.post('/users', function(req, res) {
//     res.send('test post')
// });

// app.put('/users/:id', function(req, res) {
//     res.send(`test put ${req.params.id}`);
// });
// app.delete('/users/:id', function(req, res) {
//     res.send(`test delete ${req.params.id}`)
// });