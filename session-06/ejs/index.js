const express = require('express');
const app = express();
const router = express.Router();

const port = 3000;
app.set('views','./views');
app.set('view engine','ejs');
app.use(router);

router.get('/', function(req, res) {
    res.render('index', {
        title: "hey",
        message: 'Hello there'
    });
});

app.listen(port, function() {
    console.log(`server jalan di ${port}`);
});
