const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 3001;
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended:true}))

app.post('/dountil/:action', function(req,res){
  let until = req.body.until
  let action = req.params.action
  let data = {}
  if (isNaN(until) === true) {
    data.result = 'Please provide a number'
  }
  else if (action === 'sum') {
    data.result = sum(parseInt(until))
    
  } else if (action === 'factorial') {
    data.result = factorial(parseInt(until))
  }res.send(data)
})

function sum(num) {
  let result = 0
  for (let i=1;i<=num;i++) {
    result += i
  }
  return result
}

function factorial(num) {
  let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

app.get('/', (req, res) => {
  res.send('OK!');
});

app.get('/doubling', (req, res) => {
  let input = req.query.input
  let result;
  if (isNaN(input) == false)  {
    result = {
      'received': input,
      'result': input*2
    }
  } else {
    result = {
      "error": "Please provide an input!"
    }
  }
  res.send(result);
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  let result;
  if (name !== undefined && title !== undefined)  {
    result = {
      "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
    }
  } else if (name === undefined && title === undefined) {
    result = {
      "error": "Please provide a name and a title!"
    }
  } else if (name === undefined) {
    result = {
      "error": "Please provide a name!"
    }
  } else {
    result = {
      "error": "Please provide a title!"
    }
  }
  res.send(result);
});

app.get('/appenda/:text?', (req, res) => {
  let text = req.params.text
  let result;
  if (text !== undefined && isNaN(text) === true)  {
    result = {
      'appended': text + 'a'
    }
  } else {
    result = {
      "error": "Please provide an input!"
    }
  }
  res.send(result);
});





app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});