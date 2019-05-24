'use strict';

require('dotenv').config();
const bodyParser = require('body-parser').json()
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3001;
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser)
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'reddit'
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});


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
    res.status(200).send(rows);
  });
});

app.post('/posts', function (req, res) {
  let post = {
    'title': req.body.title,
    'url': req.body.url,
    'owner_name': req.headers.username
  }
  let query_post = 'INSERT INTO posts SET ?'
  conn.query(query_post, post, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database post error');
      return;
    } else {
      let query_get = 'SELECT * FROM posts ORDER BY id DESC LIMIT ?;'
      conn.query(query_get, 1, function (err, rows) {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database select error');
          return;
        }
        res.type('application/json')
        res.status(200).send(rows);
      });
    }
  });
});

app.put('/posts/:id/upvote', function(req,res) {
  let query_upvote = 'UPDATE posts SET score = score + 1 WHERE id = ?;'
  let post_id = req.params.id
  conn.query(query_upvote, post_id, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Upvote error');
      return;
    } else {
        let query_get = 'SELECT * FROM posts WHERE id = ?;'
        conn.query(query_get, post_id, function (err, rows) {
          if (err) {
            console.log(err.toString());
            res.status(500).send('Error after upvote select');
            return;
          }
          res.type('application/json')
          res.status(200).send(rows);
        });
      }
  });
})

app.put('/posts/:id/downvote', function(req,res) {
  let query_downvote = 'UPDATE posts SET score = score - 1 WHERE id = ?;'
  let post_id = req.params.id
  conn.query(query_downvote, post_id, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Upvote error');
      return;
    } else {
        let query_get = 'SELECT * FROM posts WHERE id = ?;'
        conn.query(query_get, post_id, function (err, rows) {
          if (err) {
            console.log(err.toString());
            res.status(500).send('Error after upvote select');
            return;
          }
          res.type('application/json')
          res.status(200).send(rows);
        });
      }
  });
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
