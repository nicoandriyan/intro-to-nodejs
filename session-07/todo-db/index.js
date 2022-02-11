const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome');
});

app.delete('/belajar/:id', async (req, res) => {
    try {
        const query = 'delete from belajar where id = $1'
        await db.query(query, [req.params.id]);
        res.status(200).send({
            success: true,
            data: null,
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.put('/belajar/:id', async (req, res) => {
    try {
        const query = 'update belajar set nama_peserta = $1, materi = $2 where id = $3'
        await db.query(query, [req.body.nama_peserta, req.body.materi, req.params.id]);
        res.status(200).send({
            success: true,
            data: null,
        })
    } catch (error) {
        console.log('error edit', error);
        res.status(500).send(error.message);
    }
});

app.get('/belajar', async (req, res) => {
    try {
        const query = 'select * from belajar';
        const results = await db.query(query);
        res.status(200).send({
            success: true,
            data: results.rows,
        })
    } catch (error) {
        console.log('error get all data', error);
        res.status(500).send(error.message);
    }
});

app.get('/belajar/:id', async (req, res) => {
    try {
        const query = 'select * from belajar where id = $1'
        const results = await db.query(query, [req.params.id]);
        if (results.rows.length) {
            res.status(200).send({
                success: true,
                message: 'data ditemukan',
                data: results.rows[0],
            })
        } else {
            res.status(200).send({
                success: true,
                message: 'data tidak ditemukan',
                data: [],
            })
        }
    } catch (error) {
        console.log('error get', error);
        res.status(500).send(error.message);
    }
});

app.post('/belajar', async (req, res) => {
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
