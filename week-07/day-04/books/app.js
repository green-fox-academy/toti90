'use strict';

const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
console.log(process.env.DB_HOST)
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  insecureAuth: true,
  database: 'bookstore'
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile('public/index.html')
});

app.get('/booklist', function(req, res) {
  let cat = req.query.category;
  let pub = req.query.publisher;
  let plt = req.query.plt;
  let pgt = req.query.pgt;
  let first = true;
  let query = `SELECT b.book_name, a.aut_name, c.cate_descrip, p.pub_name, b.book_price FROM book_mast b
  JOIN author a ON b.aut_id=a.aut_id
  JOIN category c ON b.cate_id=c.cate_id
  JOIN newpublisher p ON b.pub_id=p.pub_id`
  if (cat !== undefined) {
    query = query + ` WHERE c.cate_descrip LIKE '%${cat}%'`
    first = false;
  }
  if (pub !== undefined) {
    if (!first) {
      query = query + ` AND p.pub_name LIKE '%${pub}%'`
    } else {
      query = query + ` WHERE p.pub_name LIKE '%${pub}%'`
    }
  }
  if (plt !== undefined) {
    if (!first) {
      query = query + ` AND b.book_price < ${plt}`
    } else {
      query = query + ` WHERE b.book_price < ${plt}`
      first=false
    }
  }
  if (pgt !== undefined) {
    if (!first) {
      query = query + ` AND b.book_price > ${pgt}`
    } else {
      query = query + ` WHERE b.book_price > ${pgt}`
      first=false
    }
  }
  conn.query(`${query};`, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.send(rows);
  });
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});