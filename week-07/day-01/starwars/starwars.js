const searchBar = document.querySelector('input')
const button = document.querySelector('button')
const characters = document.querySelector('.characters')
const movies = document.querySelector('.movies')
let films;

window.onload = () => {
fetch(`https://swapi.co/api/films/`)
  .then(res => res.json())
  .then(data => films = data)
}


button.addEventListener('click', function (event) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', `https://swapi.co/api/people/?search=${searchBar.value}`);
  httpRequest.onload = function () {
  let data = JSON.parse(httpRequest.responseText).results
  for (let i=0;i<data.length;i++) {
    let li = document.createElement('li')
    li.innerHTML = data[i].name
    characters.appendChild(li)
    li.addEventListener('click', function(event) {
      let character_films = data[i].films
      for (let j=0;j<character_films.length;j++) {
        let id = character_films[j].match(/\d{1}/)[0]
        let filmTitle = films.results.filter(film => film.episode_id==id)[0].title
        let li = document.createElement('li')
        li.innerHTML = filmTitle
        movies.appendChild(li)
      }
      
    })
  }
  
};
httpRequest.send()
})


