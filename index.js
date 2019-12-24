const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const router = express.Router();

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

router.route('/')
.get((req, res) => {
    res.json({status : 200, msg : "Service running..."});
});

module.exports = router;