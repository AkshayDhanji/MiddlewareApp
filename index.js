const express = require('express');
const bodyParser = require('body-parser');
const server = new express();
const router = express.Router();
const http = require('http');
const cors = require('cors');
const PORT = process.env.PORT || 8000;

var urlParser = bodyParser.urlencoded({ extended: true });
server.use(urlParser);
server.use(bodyParser.json());

server.use(cors());
server.use(applyHeaders);

server.use('/api', router);

server.listen(PORT, () => {
    console.log('localhost is running on port 8000');
})

server.get('/', (req, res) => {
    res.json({status : 200, msg : "Service running..."});
});

function applyHeaders(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
}

router.route('/submitContact')
    .post((request, response) => {
        let result = {
            "name": request.body.name,
            "email": request.body.email
        }
        response.send(result);
    });

router.route('/test')
.get((req, res) => {
    res.json({status : 200, msg : "Service running..."});
});

module.exports = router;
