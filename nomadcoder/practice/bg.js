const body =document.querySelector('body');

const IMG_NUMBER = 10;

function paintImage(imgNumber) {
    const image = document.createElement('img');
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add('bgimg');
    body.append(image);
}

function getRandom() {
    const number = Math.ceil(Math.random()*IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();