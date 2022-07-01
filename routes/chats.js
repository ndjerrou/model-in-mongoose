const express = require('express');
const routeur = express.Router();
const Chat = require('../models/Chat');

routeur.get('/', async (req, res) => {
  const chats = await Chat.find();

  res.status(200).send(chats);
});

routeur.post('/', async (req, res) => {
  const chat = new Chat({
    name: req.body.name,
    last_vaccine: req.body.last_vaccine,
  });

  const felix = await chat.save();

  res.status(201).send(felix);
});

module.exports = routeur;
