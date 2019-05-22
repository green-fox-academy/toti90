const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 3000;
app.use(bodyParser.json())

app.post('/', function(req,res){
  let what = req.body.what
  let numbers = req.body.numbers
  let respond = {}
  if (what === undefined || numbers === undefined) {
    respond.error = "Please provide what to do with the numbers!"
  }
  else if (what === 'sum') {
    respond.result = sum(numbers)
  }
  else if (what === 'multiply') {
    respond.result = multiply(numbers)
  }
  else if (what === 'double') {
    respond.result = double(numbers)
  }
  res.send(respond)
})

function sum(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
}

function multiply(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue)
}

function double(arr) {
  return arr.map(element => element*2);
}


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});