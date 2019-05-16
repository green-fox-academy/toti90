// const express = require('express')
// const app = express()
// const port = 3000

// app.set('view engine', 'ejs');

// app.use('/assets', express.static('assets'))

// app.get('/', (req,res) => res.rendes('home'))
// app.listen(port, console.log('example'))

const express = require('express');
const app = express();
var path = require('path')
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));
//app.set('assets', path.join(__dirname, '/assets'));

app.use('/assets', express.static('assets'))
// home page
app.get('/', (req, res) => {
  let name = req.query.name
  if (name === undefined) {
    name = 'Guest'
  }
  // render `home.ejs`
  res.render('greetings', {
    name: name,
  });
});


// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});