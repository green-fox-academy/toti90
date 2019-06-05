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

app.get('/api/game', (req, res) => {
  conn.query('SELECT * FROM questions', (err,rows) => {
    if (err) {
      res.status(400).send('Database select error on questions')
    } else if (rows.length !== 0) {
      let numberOfQuestions = rows.length
      let randomQuestion = Math.floor(Math.random()*numberOfQuestions)
      let result = {id: rows[randomQuestion].id, question: rows[randomQuestion].question}
      conn.query('SELECT * FROM answers WHERE question_id=?',[rows[randomQuestion].id], (err,rows) => {
        if (err) {
          console.log(err)
          res.status(400).send('Database select error on answers')
        } else {
          let answers = []
          rows.forEach(row => answers.push(row))
          result.answer = answers
          res.status(200).send(result)
        }
      } )
    } else {
      res.status(200).send('No item in database')
    }
  })
})

app.listen(PORT, () => {console.log(`App listen to port: ${PORT}`)})