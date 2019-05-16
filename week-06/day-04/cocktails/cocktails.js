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
app.use('/assets', express.static('assets'))

// home page
app.get('/', (req, res) => {
  let alcohol = req.query.alcohol
  let filteredCocktails
  if (alcohol === undefined) {
    filteredCocktails = cocktails
  }
  else {
    filteredCocktails = filter(alcohol,cocktails)
    if (filteredCocktails.length === 0) {
      filteredCocktails = [ { name: 'NO COCKTAIL', price: "", contains: [], isAlcoholic: true }]
    }
  }
  res.render('cocktails.ejs', {cocktails:filteredCocktails, alcoholList:alcoholList})
});


// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});



function filter(alcohol, drinks) {
  result = []
  for (let drink of drinks) {
    if (drink['contains'].indexOf(alcohol) !== -1) {
      drink['contains'].join("")
      result.push(drink)
    }
  }
  return result 
}

const cocktails = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

// const button = document.querySelector('.all');
// button.onclick = () => {
//     alert('hello')
//   };