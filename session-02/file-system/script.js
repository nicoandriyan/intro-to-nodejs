var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
    //baca file
    fs.readFile('tiana.html', (err, data) => {
        if (err) throw err;

        // kirim response
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(data);
        res.end();
    });
}).listen(8000);