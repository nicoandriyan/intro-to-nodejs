const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.use(express.json());


app.post('/tambah-belajar', async (req, res) => {
    const query = "insert into belajar(nama_peserta, materi) values($1, $2) returning *";
    const values = [req.body.nama_peserta, req.body.materi];

    // if use promise
    db.query(query, values)
        .then(results => {
            res.status(200).send(results.rows[0]);
        })
        .catch(e => {
            console.log('error insert', e);
            res.status(400).send('error');
        });

    // // if use callback
    // db.query(query, values, (err, results) => {
    //     if (err) {
    //         console.log('error insert', e);
    //         res.status(400).send('error');
    //     } else {
    //         res.status(200).send(results.rows[0]);
    //     }
    // });

    // // if use async await
    // try {
    //     const results = await db.query(query, values);
    //     res.status(200).send(results.rows[0]);
    // } catch (error) {
    //     console.log('error insert', e);
    //     res.status(400).send('error');
    // }
});

app.listen(port, function() {
    console.log(`server jalan di ${port}`);
});
