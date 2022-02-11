exports.getMateri = (req, res) => {
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
}