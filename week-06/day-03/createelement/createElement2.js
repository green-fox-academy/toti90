// Remove the king from the list.

// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content.

const planetData = [
  {
  category: 'inhabited',
  content: 'Foxes',
  asteroid: true,
  },
  {
  category: 'inhabited',
  content: 'Whales and Rabbits',
  asteroid: true,
  },
  {
  category: 'uninhabited',
  content: 'Baobabs and Roses',
  asteroid: true,
  },
  {
  category: 'inhabited',
  content: 'Giant monsters',
  asteroid: false,
  },
  {
  category: 'inhabited',
  content: 'Sheep',
  asteroid: true,
  },
  ];
  var liKing = document.querySelector('li')
  var ul = document.querySelector('ul')
  ul.removeChild(liKing)
  for (let i=0; i<planetData.length;i++) {
    if (planetData[i].asteroid === true) {
      var li = document.createElement('li')
      li.setAttribute('class', planetData[i].category)
      li.innerHTML = planetData[i].content
      ul.appendChild(li)
    }
  }

