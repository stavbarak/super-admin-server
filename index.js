const express = require('express');
const bodyParser = require('body-parser')
const http = require('http');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const router = require('./router');

// db
mongoose.connect('mongodb://localhost/auth');

// app
const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);


// server
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on ' + port);

// var app = express();
// app.use(bodyParser.json());

// app.use(cors())
// app.get('/', (req, res) => {
//     res.send('hellp world');
// });
// app.post('/authenticate', (req, res) => {
//     var token = "";
//     const password = req.body.password;
//     const userName = req.body.username;
//     res.status(300);
//     if (userName === "Idan" && password === "1234") {
//         res.status(200);
//         token = "whatAtToken";
//     }
//     res.send({token: token});
// });

// var server = app.listen(3001, () => {
//     console.log('1111');
// });