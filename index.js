const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const router = express.Router();
const http = require('http');
const cors = require('cors');

var urlParser = bodyParser.urlencoded({ extended: true });
server.use(urlParser);
server.use(bodyParser.json());

server.use('/api', router);
server.use(cors());

server.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

router.route('/submitContact')
    .post((request, response) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
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