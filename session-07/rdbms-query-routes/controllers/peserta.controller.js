exports.getPeserta = (req, res) => {
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
}

exports.postPeserta = (req, res) => {
    const query = "insert into peserta(nama, kelas, id_materi) values ($1, $2, $3)";
    const values = [req.body.nama, req.body.kelas, req.body.id_materi];
    db.query(query, values)
        .then(results => {
            res.status(200).send({
                success: true,
                data: results.rows[0]
            });
        })
        .catch(e => {
            console.log('error get', e);
            res.status(500).send(e.message);
        });
}