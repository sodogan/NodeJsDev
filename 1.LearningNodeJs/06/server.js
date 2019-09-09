var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var dbUrl =
  '<url from mLab>';

var messages = [
  { name: 'Tim', message: 'Hey!' },
  { name: 'Jim', message: 'Wassup!?' }
];

app.get('/messages', (req, res) => {
  res.send(messages);
});

app.post('/messages', (req, res) => {
  // console.log(req.body);
  messages.push(req.body);
  io.emit('message', req.body);
  res.sendStatus(200);
});

io.on('connection', socket => {
  console.log('a user connected');
});

mongoose.connect(dbUrl, { useNewUrlParser: true }, err => {
  console.log('mongoDB connection', err);
});

var server = http.listen(3000, () => {
  console.log(`Server is listening on port: ${server.address().port}`);
});
