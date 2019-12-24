const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const router = express.Router();
const http = require('http');

var urlParser = bodyParser.urlencoded({ extended: true });
server.use(urlParser);
server.use(bodyParser.json());

server.use('/api', router);

server.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

router.route('/submitContact')
    .post((request, response) => {
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Accept', 'application/json');
        var res = JSON.stringify({
            name: request.body.name,
            email: request.body.email
        });
        console.log(res);
        response.send(res);

    });

server.listen(3001, () => {
    console.log('localhost is running on port 3001');
})

router.route('/test')
.get((req, res) => {
    res.json({status : 200, msg : "Service running..."});
});

const httpServer = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
  });

  httpServer.listen(3002,() => {
    console.log(`Server running at port 3002`);
  });

module.exports = router;