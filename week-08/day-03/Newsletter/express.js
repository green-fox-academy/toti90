`use strict`;

const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/signup', (req, res) => {
    res.send(`<h1>Thanks ${req.body.name}, we will send updates to ${req.body.email}</h1>`);
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});