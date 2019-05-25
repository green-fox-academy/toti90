'use strict';

require('dotenv').config();
const bodyParser = require('body-parser')
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3100;
app.use(bodyParser.text())

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
  let user = req.headers.username
  let query = `SELECT p1.id, p1.title, p1.url, p1.timestamp, CASE WHEN (SELECT SUM(vote)
  FROM votes WHERE post_id = p1.id GROUP BY post_id) IS NOT NULL THEN (SELECT SUM(vote)
  FROM votes WHERE post_id = p1.id GROUP BY post_id) ELSE 0 END AS score, 
  p1.owner_name, CASE WHEN p2.vote IS NULL THEN 0 ELSE p2.vote END AS vote FROM posts p1 
  LEFT JOIN (SELECT p.id, p.title, p.url, p.timestamp, p.owner_name, v.vote FROM posts p JOIN votes v ON p.id = v.post_id 
  WHERE v.user_name = ?) AS p2 ON p1.id = p2.id;`
  conn.query(query, [user], function (err, rows) {
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
    'title': JSON.parse(req.body).title,
    'url': JSON.parse(req.body).url,
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

app.put('/posts/:id/:vote', function (req, res) {
  let vote = req.params.vote
  let post_id = req.params.id
  let voter = req.headers.username
  conn.query('SELECT vote FROM votes WHERE post_id = ? AND user_name = ?', [post_id, voter], function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Search is there a vote error');
      return;
    } else if ((rows.length !== 0 && rows[0].vote === 1 && vote === 'upvote') || (rows.length !== 0 && rows[0].vote === -1 && vote === 'downvote')) {
      conn.query('DELETE FROM votes WHERE post_id = ? AND user_name = ?', [post_id, voter], function (err, rows) {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Set vote to 0 error');
          return;
        }
        res.type('application/json')
        res.status(200).send(rows);
        return;
      });
    } else {
      let query;
      if (vote === 'upvote') {
        if (rows.length !== 0) {
          query = 'UPDATE votes SET vote = 1 WHERE post_id = ? AND user_name = ?'
        } else {
          query = ' INSERT INTO votes(post_id, user_name, vote) VALUES (?,?,1);'
        }
      } else if (vote === 'downvote') {
        if (rows.length !== 0) {
          query = 'UPDATE votes SET vote = -1 WHERE post_id = ? AND user_name = ?'
        } else {
          query = ' INSERT INTO votes(post_id, user_name, vote) VALUES (?,?,-1);'
        }
      }
      conn.query(query, [post_id, voter], function (err, rows) {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Upvote error');
          return;
        }
        res.type('application/json')
        res.status(200).send(rows);
      });
    }
  });
});

app.delete('/posts/:id', function (req, res) {
  let post_id = req.params.id
  let query = 'DELETE FROM posts WHERE id=?;'
  let query2 = 'DELETE FROM votes WHERE post_id=?;'
  conn.query(query, [post_id], function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Upvote error');
      return;
    }
    res.type('application/json')
    res.status(200)
    console.log(rows)
  });
  conn.query(query2, [post_id], function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Upvote error');
      return;
    }
    res.type('application/json')
    res.status(200)
    console.log(rows)
  });
})

app.put('/posts/:id', function (req, res) {
  let { title, url } = JSON.parse(req.body);
  let id = req.params.id
  let whereQueries = [];
  let whereParams = [];
  if (title !== undefined) {
    whereQueries.push(`title = ?`);
    whereParams.push(title)
  } 
  if (url !== undefined) {
    whereQueries.push(`url = ?`);
    whereParams.push(url)
  }
  const whereSQL = `SET ${whereQueries.join(', ')}`
  let query = `UPDATE posts ${whereSQL} WHERE id = ${id}`
  console.log(query)
  conn.query(query, whereParams, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Update error');
      return;
    }
    res.type('application/json')
    res.status(200).send('rows')
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
