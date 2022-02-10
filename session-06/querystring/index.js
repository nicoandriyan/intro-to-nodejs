const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
// const Article = require('./models').Article;

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/welcome', (req, res) => {
    let page = req.query.page;
    let limit = req.query.limit;
    let nama = req.query.nama;
    let hasil = '';

    if (page > 5) {
        hasil = 'tidak boleh';
    } else {
        hasil = 'kita tamilkan';
    }
    console.log('nama = ' + nama);
    console.log('page = ' + page);
    console.log('limit = ' + limit);

    res.send({
        nama, page, limit, hasil
    });

    // let articles = await Article.findAll()
    //     .paginate({ page, limit})
    //     .exec();

    // res.render("index", {
    //     articles: articles
    // });
});

app.listen(port, function() {
    console.log(`server jalan di ${port}`);
});
