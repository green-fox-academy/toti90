let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=2JlB3Q6Q4Iiju1o8PuyXRkDgwrLSIw2g');
httpRequest.onload = function () {
  const body = document.querySelector('body');
  let data = JSON.parse(httpRequest.responseText).response.docs
  for (let i=0;i<data.length;i++) {
    let headline = document.createElement('h1')
    headline.innerHTML = data[i].headline.main
    body.appendChild(headline)
    let snippet = document.createElement('h3')
    snippet.innerHTML = data[i].snippet
    body.appendChild(snippet)
    let pubDate = document.createElement('p')
    pubDate.innerHTML = data[i].pub_date
    body.appendChild(pubDate)
    let a = document.createElement('a')
    a.setAttribute('href', data[i].web_url)
    a.innerHTML = 'link'
    body.appendChild(a)
  }
};
httpRequest.send()