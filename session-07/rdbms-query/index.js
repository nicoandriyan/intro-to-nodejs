const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome');
});

app.get('/materi', async (req, res) => {
    const query = "select * from materi";
    db.query(query)
        .then(results => {
            res.status(200).send({
                success: true,
                data: results.rows
            });
        })
        .catch(e => {
            console.log('error get', e);
            res.status(500).send(e.message);
        });
});

app.post('/materi', async (req, res) => {
    const query = "insert into materi(nama_materi) values($1) returning *";
    const values = [req.body.nama_materi];

    db.query(query, values)
        .then(results => {
            res.status(200).send({
                success: true,
                data: results.rows[0]
            });
        })
        .catch(e => {
            console.log('error insert', e);
            res.status(400).send('error');
        });
});

app.post('/nilai', async (req, res) => {
    const query = "insert into nilai(id_peserta, id_materi, nilai, huruf_mutu) values($1, $2, $3, $4) returning *";
    const values = [req.body.id_peserta, req.body.id_materi, req.body.nilai, req.body.huruf_mutu];

    db.query(query, values)
        .then(results => {
            res.status(200).send({
                success: true,
                data: results.rows[0]
            });
        })
        .catch(e => {
            console.log('error insert', e);
            res.status(400).send('error');
        });
});

app.delete('/materi/:id', async (req, res) => {
    const querySelect = 'select tp.*, nl.* from peserta tp join nilai nl on nl.id_peserta=tp.id_peserta where nl.id_materi=$1';
    const values = [req.params.id];
    db.query(querySelect, values)
        .then(results => {
            if (results.rows.length) {
                console.log('result', results);
                res.status(200).send({
                    success: true,
                    message: 'tidak boleh dihapus \n data materi ada pada data nilai dan peserta',
                    data: null
                });
            } else {
                const queryHapus = 'delete from materi where id_materi = $1';
                db.query(queryHapus, values)
                    .then(results => {
                        console.log('result', results);
                        res.status(200).send({
                            success: true,
                            message: 'materi berhasil dihapus',
                            data: null
                        });
                    })
                    .catch(e => {
                        console.log('error delete', e);
                        res.status(500).send(e.message);
                    });
            }
            
        })
        .catch(e => {
            console.log('error delete', e);
            res.status(500).send(e.message);
        });
});

app.delete('/nilai/:id', async (req, res) => {
    const queryHapus = 'delete from nilai where id_nilai = $1';
    db.query(queryHapus, values)
        .then(results => {
            console.log('result', results);
            res.status(200).send({
                success: true,
                message: 'nilai berhasil dihapus',
                data: null
            });
        })
        .catch(e => {
            console.log('error delete', e);
            res.status(500).send(e.message);
        });
});

app.get('/peserta', async (req, res) => {
    const query = "select * from peserta";
    db.query(query)
        .then(results => {
            res.status(200).send({
                success: true,
                data: results.rows
            });
        })
        .catch(e => {
            console.log('error get', e);
            res.status(500).send(e.message);
        });
});

app.delete('/peserta/:id_materi/:id_peserta', async (req, res) => {
    const querySelect = 'select tp.*, nl.* from peserta tp join nilai nl on nl.id_peserta=tp.id_peserta where nl.id_materi=$1 and nl.id_peserta=$2';
    const values = [req.params.id_materi, req.params.id_peserta];

    db.query(querySelect, values)
        .then(results => {
            if (results.rows.length) {
                res.status(200).send({
                    success: true,
                    message: 'tidak dapat dihapus',
                    data: null
                });
            } else {
                const queryHapus = 'delete from peserta where id_peserta = $1';
                const values2 = [req.params.id_peserta];
                db.query(queryHapus, values2)
                    .then(results => {
                        console.log('result', results);
                        res.status(200).send({
                            success: true,
                            message: 'peserta berhasil dihapus',
                            data: null
                        });
                    })
                    .catch(e => {
                        console.log('error delete', e);
                        
                        res.status(500).send(e.message);
                    });
            }
        })
        .catch(e => {
            console.log('error delete', e);
            res.status(500).send(e.message);
        });
});

app.post('/peserta', async (req, res) => {
    const query = "insert into peserta(nama, kelas, id_materi) values($1, $2, $3) returning *";
    const values = [req.body.nama, req.body.kelas, req.body.id_materi];

    db.query(query, values)
        .then(results => {
            res.status(200).send({
                success: true,
                data: results.rows[0]
            });
        })
        .catch(e => {
            console.log('error insert', e);
            res.status(400).send('error');
        });
});


app.listen(port, function() {
    console.log(`server jalan di ${port}`);
});
