const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 3000;
app.use(bodyParser.json())

app.post('/sith', function(req,res){
  let text = req.body.text
  let respond = {}
  if (text === undefined) {
    respond.error = "Please provide a text!"
  }
  else if (what === 'sum') {
    respond.result = sum(numbers)
  }
  res.send(respond)
})