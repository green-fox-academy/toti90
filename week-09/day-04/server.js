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
  conn.query('SELECT * FROM questions', (err, rows) => {
    if (err) {
      res.status(400).send('Database select error on questions')
    } else if (rows.length !== 0) {
      let numberOfQuestions = rows.length
      let randomQuestion = Math.floor(Math.random() * numberOfQuestions)
      let result = { id: rows[randomQuestion].id, question: rows[randomQuestion].question }
      conn.query('SELECT * FROM answers WHERE question_id=?', [rows[randomQuestion].id], (err, rows) => {
        if (err) {
          console.log(err)
          res.status(400).send('Database select error on answers')
        } else {
          let answers = []
          rows.forEach(row => answers.push(row))
          result.answer = answers
          res.status(200).send(result)
        }
      })
    } else {
      res.status(200).send('No item in database')
    }
  })
})

app.get('/api/questions', (req, res) => {
  conn.query('SELECT * FROM questions', (err, rows) => {
    if (err) {
      res.status(400).send('Database select error on questions')
    }
    res.status(200).send(rows)
  })
})

app.post('/api/questions', (req, res) => {
  const question = req.body.question
  const answers = req.body.answers
  conn.query('INSERT INTO questions(question) VALUES(?)', [question], (err, rows) => {
    if (err) {
      res.status(400).send('Insert into questions error')
    }
    conn.query('SELECT id FROM questions WHERE question = ?', [question], (err, rows) => {
      if (err) {
        res.status(400).send('SELECT error after insert to questions')
      }
      const newId = rows[0].id
      conn.query(`
        INSERT INTO answers(question_id, answer, is_correct) VALUES(?,?,?),(?,?,?),(?,?,?),(?,?,?);
        `, [
          newId, answers[0].answer_1, answers[0].is_correct,
          newId, answers[1].answer_2, answers[1].is_correct,
          newId, answers[2].answer_3, answers[2].is_correct,
          newId, answers[3].answer_4, answers[3].is_correct], (err, ans) => {
            if (err) {
              console.log(err)
              res.status(400).send('INSERT INTO answers error')
            }
            res.status(200).send('Added new question successfully!')
          }
      )
    })
  })
})



app.delete('/api/questions/:id', (req, res) => {
  const id = req.params.id
  conn.query('DELETE FROM questions WHERE id = ?', [id], (err, rows) => {
    if (err) {
      res.status(400).send('DELETE from questions error')
    }
    conn.query('DELETE FROM answers WHERE question_id = ?', [id], (err, rows) => {
      if (err) {
        res.status(400).send('DELETE from answers error')
      }
      res.status(200).send('Deleted successfully')
    })
  })
})

app.listen(PORT, () => { console.log(`App listen to port: ${PORT}`) })