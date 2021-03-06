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
  // let alcohol = req.query.alcohol
  // let filteredCocktails
  // if (alcohol === undefined) {
  //   filteredCocktails = cocktails
  // }
  // else {
  //   filteredCocktails = filter(alcohol,cocktails)
  //   if (filteredCocktails.length === 0) {
  //     filteredCocktails = [ { name: 'NO COCKTAIL', price: "", contains: [], isAlcoholic: true }]
  //   }
  // }
  res.render('weather.ejs', {forecasts:forecasts})
});

app.get('/cities', (req, res) => {
  const city = req.query.city
  let result = forecasts.filter(x => x.city===city)
  res.render('cities.ejs', {city:result[0]})
});


// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});



// function filter(alcohol, drinks) {
//   result = []
//   for (let drink of drinks) {
//     if (drink['contains'].indexOf(alcohol) !== -1) {
//       drink['contains'].join("")
//       result.push(drink)
//     }
//   }
//   return result 
// }

const forecasts = [
  {
    city: 'Seattle',
    location: 'Washington, United States',
    weather: [
      { temp: 11, icon: 'cloudy', message: 'Complete Grey' },
      { temp: 11, icon: 'cloudy', message: 'Just stay in bed.' },
      { temp: 13, icon: 'cloudy', message: 'Meh...' },
      { temp: 12, icon: 'cloudy', message: 'Still meh...' },
      { temp: 13, icon: 'partly_cloudy', message: 'Not too sunny.' },
    ],
  },
  {
    city: 'Miami',
    location: 'Florida, United States',
    weather: [
      { temp: 33, icon: 'sunny', message: 'Hot.' },
      { temp: 35, icon: 'sunny', message: 'Too hot!' },
      { temp: 34, icon: 'sunny', message: 'Sunny.' },
      { temp: 34, icon: 'sunny', message: 'Beach time!' },
      { temp: 35, icon: 'sunny', message: 'Here comes the sun.' },
    ],
  },
  {
    city: 'Barcelona',
    location: 'Spain',
    weather: [
      { temp: 19, icon: 'sunny', message: 'Sunny.' },
      { temp: 15, icon: 'partly_cloudy', message: 'Not too sunny.' },
      { temp: 17, icon: 'sunny', message: 'So far so good.' },
      { temp: 16, icon: 'rainy', message: 'Rihanna - Umbrella' },
      { temp: 18, icon: 'sunny', message: 'Here comes the sun.' },
    ],
  },
  {
    city: 'London',
    location: 'United Kingdom',
    weather: [
      { temp: 4, icon: 'snowy', message: 'Go home winter.' },
      { temp: 7, icon: 'rainy', message: 'Do you have an umbrella?' },
      { temp: 10, icon: 'rainy', message: 'It\'s rainy.' },
      { temp: 9, icon: 'rainy', message: 'Meh...' },
      { temp: 11, icon: 'rainy', message: 'Meh... Again.' },
    ],
  },
  {
    city: 'Budapest',
    location: 'Hungary',
    weather: [
      { temp: 12, icon: 'partly_cloudy', message: 'It\'s cloudy.' },
      { temp: 16, icon: 'rainy', message: 'Sooo... Wet.' },
      { temp: 18, icon: 'partly_cloudy', message: 'Here comes the sun.' },
      { temp: 16, icon: 'partly_cloudy', message: 'Not too sunny.' },
      { temp: 19, icon: 'partly_cloudy', message: 'So far so good.' },
    ],
  },
];