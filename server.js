const { json } = require('express');
const express = require('express');
require('dotenv').config();
require('./config/connexion')();

const chats = require('./routes/chats');

const app = express();

app.use(express.json()); // to get access to req.body for POST requests
app.use('/chats', chats);

app.get('*', (req, res) => {
  res.send('je suis une route');
});

app.listen(1000, () => console.log('Listenning on port 1000'));
