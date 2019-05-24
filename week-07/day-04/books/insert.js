'use strict';

require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  insecureAuth: true,
  database: 'bookstore',
});



conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

let query1 = `USE bookstore;`
conn.query(query1, function (err, rows) {
  if (err) {
    console.log(err.toString());
    return;
  } else {
    console.log('Use DB')
    return;
  }
});

try {
  let content = fs.readFileSync('./books/users.csv', "UTF8");
  let rows = content.split('\n')
  let insertion;
  let cols;
  let table = 'users'
  for (let i = 0; i < rows.length; i++) {
    let words = rows[i].split(",")
    if (i === 0) {
      cols = words
      let query2 = `
        CREATE TABLE IF NOT EXISTS ${table} (
          ${cols[0]} INT NOT NULL AUTO_INCREMENT,
          ${cols[1]} VARCHAR(20),
          ${cols[2]} VARCHAR(30) NOT NULL,
          ${cols[3]} VARCHAR(30) NOT NULL,
          ${cols[4]} VARCHAR(100),
          ${cols[5]} VARCHAR(100),
          ${cols[6]} VARCHAR(255),
          ${cols[7]} TEXT(10),
          KEY Id (id) USING BTREE
        );`
        conn.query(query2, function (err, rows) {
          if (err) {
            console.log(err.toString());
            return;
          } else {
            console.log('Make table')
            return;
          }
        });
    } else {
      insertion = {
        'id': parseInt(words[0]),
        'prefix': words[1],
        'first_name': words[2],
        'last_name': words[3],
        'address': words[4],
        'height': words[5],
        'bitcoin_address': words[6],
        'color_preference': words[7]
      }
      conn.query('INSERT INTO users SET ?', insertion, function (err, rows) {
        if (err) {
          console.log(err.toString());
          return;
        }
      });
    }
  }
  console.log('Added datas to table')
}
catch (e) {
  let newError = new Error(`File does not exist!`);
  console.log(newError.message);
}

