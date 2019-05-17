const preBtn = document.querySelector('#preBtn');
const nextBtn = document.querySelector('#nextBtn');
const image = document.querySelector('.image')
const imageHthree = document.querySelector('h3')
const thumbnailImages = document.querySelectorAll('.thumbImg')

let images = [1,2,3,4,5]
let currentImage = 1

preBtn.onclick = () => {
  thumbnailImages[currentImage-1].classList.remove('selected')
  if (currentImage !== images[0]) {
    currentImage--
  } else {
    currentImage = images[images.length-1]
  }
  image.setAttribute("src", `/assets/${currentImage.toString()}.jpg`)
  thumbnailImages[currentImage-1].classList.add('selected')
  imageHthree.innerHTML = `Picture number is: ${currentImage.toString()}`
};

nextBtn.onclick = () => {
  thumbnailImages[currentImage-1].classList.remove('selected')
  if (currentImage !== images.length) {
    currentImage++
  } else {
    currentImage = images[0]
  }
  image.setAttribute("src", `/assets/${currentImage.toString()}.jpg`)
  thumbnailImages[currentImage-1].classList.add('selected')
  imageHthree.innerHTML = `Picture number is: ${currentImage.toString()}`
};

for (let i = 0; i<thumbnailImages.length;i++) {
  thumbnailImages[i].addEventListener('click', function (event) {
    selectImage(i)
  });
}

function selectImage(select) {
  thumbnailImages[currentImage-1].classList.remove('selected')
  currentImage = select+1
  image.setAttribute("src", `/assets/${currentImage.toString()}.jpg`)
  thumbnailImages[currentImage-1].classList.add('selected')
  imageHthree.innerHTML = `Picture number is: ${currentImage.toString()}`
}