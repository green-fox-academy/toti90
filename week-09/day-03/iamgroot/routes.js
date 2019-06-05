const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json())
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'guardians'
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

app.get('/groot', (req, res) => {
  let message = req.query.message
  let result;
  if (message) {
    result = { received: message, translated: 'I am Groot!' }
    res.status(200).send(result)
  } else {
    result = { error: 'I am Groot!' }
    res.status(400).send(result)
  }
});

app.get('/yondu', (req, res) => {
  let distance = req.query.distance
  let time = req.query.time
  let speed = distance / time
  let result = { distance: parseFloat(distance), time: parseFloat(time), speed: speed }
  if (time === '0') {
    res.status(401).send({ err: 'divide by zero is impossible' })
  }
  else if (distance && time) {
    res.status(200).send(result)
  } else {
    res.status(400).send({ err: 'no data' })
  }
});

app.get('/rocket', (req, res) => {
  res.status(200).send(
    {
      "caliber25": 0,
      "caliber30": 0,
      "caliber50": 0,
      "shipstatus": "empty",
      "ready": false
    })
});

app.get('/rocket/fill', (req, res) => {
  const amount = parseFloat(req.query.amount)
  const maxAmount = 12500

  function shipstatusFunc(amount, maxAmount) {
    const percent = amount / maxAmount
    if (amount === 0) {
      return `empty`
    } else if (percent === 1) {
      return `full`
    } else if (percent > 1) {
      return `overloaded`
    } else {
      return `${percent * 100}%`
    }
  }
  if (req.query.caliber && req.query.amount) {
    const shipstatus = shipstatusFunc(amount, maxAmount)
    res.status(200).send(
      {
        "received": req.query.caliber,
        "amount": amount,
        "shipstatus": shipstatus,
        "ready": (shipstatus === 'full') ? true : false,
      })
  } else {
    res.status(400).send({ err: 'not enough data' })
  }
});

app.get('/drax', (req, res) => {
  conn.query('SELECT * FROM calorie', (err, ans) => {
    if (err) {
      res.status(400).send('Database error')
    } else {
      res.status(200).send(ans)
    }
  })
});

app.post('/drax', (req, res) => {
  conn.query('INSERT INTO calorie (name, amount, calorie) VALUES (?,?,?)',
  [req.body.name, req.body.amount, req.body.calorie], (err, ans) => {
    if (err) {
      console.log(err)
      res.status(400).send('INSERTION error')
    } else {
      let answer = ans.affectedRows
      res.status(200).send({answer: answer})
    }
  })
});

app.delete('/drax', (req, res) => {
  conn.query('DELETE FROM calorie WHERE name =?',
  [req.body.name], (err, ans) => {
    if (err) {
      console.log(err)
      res.status(400).send('DELETE error')
    } else {
      let answer = ans.affectedRows
      res.status(200).send({answer: answer})
    }
  })
});

app.put('/drax', (req, res) => {
  conn.query('UPDATE calorie SET amount = ? WHERE name =?',
  [req.body.amount,req.body.name], (err, ans) => {
    if (err) {
      console.log(err)
      res.status(400).send('UPDATE error')
    } else {
      let answer = ans.affectedRows
      res.status(200).send({answer: answer})
    }
  })
});



module.exports = app;