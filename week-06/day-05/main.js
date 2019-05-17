const preBtn = document.querySelector('#preBtn');
const nextBtn = document.querySelector('#nextBtn');
const image = document.querySelector('.image')
const imageHthree = document.querySelector('h3')

let images = [1,2,3,4,5]
let currentImage = 1

preBtn.onclick = () => {
  if (currentImage !== images[0]) {
    currentImage--
  } else {
    currentImage = images[images.length-1]
  }
  image.setAttribute("src", `/assets/${currentImage.toString()}.jpg`)
  imageHthree.innerHTML = `Picture number is: ${currentImage.toString()}`
};

nextBtn.onclick = () => {
  if (currentImage !== images.length) {
    currentImage++
  } else {
    currentImage = images[0]
  }
  image.setAttribute("src", `/assets/${currentImage.toString()}.jpg`)
  imageHthree.innerHTML = `Picture number is: ${currentImage.toString()}`
};
