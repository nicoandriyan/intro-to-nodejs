const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;

global.db = db;
const pesertaRoutes = require('./routes/peserta.route');
const materiRoutes = require('./routes/materi.route');
const nilaiRoutes = require('./routes/nilai.route');

app.use(express.json());
app.use('/peserta', pesertaRoutes);
app.use('/materi', materiRoutes);
app.use('/nilai', nilaiRoutes);


app.listen(port, function() {
    console.log(`server jalan di ${port}`);
});
