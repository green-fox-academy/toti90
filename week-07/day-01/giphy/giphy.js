'use strict';
let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=idiot&api_key=pGLwL0Txw9fUEAKPTQvjoYJLbJ5JpXmL');
httpRequest.onload = function () {
  const thumbnail = document.querySelector('.thumbnail')
  const bigPicture = document.querySelector('img')
  let data = JSON.parse(httpRequest.responseText).data;
  for (let i = 0; i < 16; i++) {
    let img = document.createElement('img')
    img.setAttribute('src', data[i].images.fixed_height_small_still.url)
    thumbnail.appendChild(img)
    img.addEventListener('click', function (event) {
      bigPicture.setAttribute('src', data[i].images.original.url)
    })  
  }
};
httpRequest.send()


