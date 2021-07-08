const express = require('express');
const bodyParser = require('body-parser');
const server = new express();
const router = express.Router();
const http = require('http');
const cors = require('cors');

var urlParser = bodyParser.urlencoded({ extended: true });
server.use(urlParser);
server.use(bodyParser.json());

server.use('/api', router);
server.use(cors());

server.listen(3001, () => {
    console.log('localhost is running on port 3001');
})

server.get('/', (req, res) => {
    res.json({status : 200, msg : "Service running..."});
});

router.route('/submitContact')
    .post((request, response) => {
        request.setHeader("Access-Control-Allow-Origin", "*");
        request.setHeader("Access-Control-Allow-Credentials", "true");
        request.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        request.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        var res = JSON.stringify({
            name: request.body.name,
            email: request.body.email
        });
        console.log(res);
        response.send(res);

    });

router.route('/test')
.get((req, res) => {
    res.json({status : 200, msg : "Service running..."});
});

module.exports = router;
