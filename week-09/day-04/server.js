`use strict`;

require('dotenv').config();
const express = require('express');
const PORT = 3000;
const path = require('path');
const app = express();
const mysql = require('mysql');

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'quiz'
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/game.html'))
})

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/questions.html'))
})

app.listen(PORT, () => {console.log(`App listen to port: ${PORT}`)})