'use strict';

const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  insecureAuth: true,
  database: 'reddit'
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

app.use(express.static(path.join(__dirname, 'public')))

app.get('/hello', function (req, res) {
  res.send('Hello')
});

app.get('/posts', function (req, res) {
  let query = `SELECT * FROM posts;`
  conn.query(query, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.type('application/json')
    res.status(200).json(rows);
  });
});

app.post('/posts', function (req, res) {
  let query = `SELECT * FROM posts;`
  conn.query(query, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.type('application/json')
    res.status(200).json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});