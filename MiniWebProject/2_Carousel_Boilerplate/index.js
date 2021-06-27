const container = document.querySelector('.container');
const leftArrow = container.querySelector('.left-arrow');
const rightArrow = container.querySelector('.right-arrow');

const images = document.querySelector('.images');
const imgs = images.querySelector('img');

const dotContainer = document.querySelector('.dotcontainer');

let IMAGE_NUMBER = 1;
let predott = 1;
let currentdott;

function downchangeDot(imagenum) {
    if (IMAGE_NUMBER === 5) {
        predott = 1;
        const predot = dotContainer.querySelector('#dot1');
        const currentdot = dotContainer.querySelector('#dot5');
        predot.style.opacity = 0.5;
        currentdot.style.opacity = 1;
    } else {
        predott = imagenum+1;
        const predot = dotContainer.querySelector(`#dot${imagenum+1}`);
        const currentdot = dotContainer.querySelector(`#dot${imagenum}`);
        predot.style.opacity = 0.5;
        currentdot.style.opacity = 1;
    }
}

function upchangeDot(imagenum) {
    if (IMAGE_NUMBER === 1) {
        predott = 5;
        const predot = dotContainer.querySelector('#dot5');
        const currentdot = dotContainer.querySelector('#dot1');
        predot.style.opacity = 0.5;
        currentdot.style.opacity = 1;
    } else {
        predott = imagenum-1;
        const predot = dotContainer.querySelector(`#dot${imagenum-1}`);
        const currentdot = dotContainer.querySelector(`#dot${imagenum}`);
        predot.style.opacity = 0.5;
        currentdot.style.opacity = 1;
    }
}

function clickedDot(event) {
    const clickeddot = dotContainer.querySelector(`#${event.toElement.id}`);
    currentdott = event.toElement.id[3];
    IMAGE_NUMBER = event.toElement.id[3];
    console.log(IMAGE_NUMBER);
    displayImage();
    dotchange(currentdott);
}

function dotchange(currentdot) {
    const preDot = dotContainer.querySelector(`#dot${predott}`);
    const currentDot = dotContainer.querySelector(`#dot${currentdot}`);
    console.log(preDot);
    preDot.style.opacity = 0.5;
    currentDot.style.opacity = 1;
    predott = currentdott;
}

function displayImage() {
    imgs.src=`images/image-${IMAGE_NUMBER}.png`;
}

function previousImage() {
    if (IMAGE_NUMBER === 1) {
        IMAGE_NUMBER = 5;
        imgs.src=`images/image-${IMAGE_NUMBER}.png`;
        downchangeDot(IMAGE_NUMBER);
    } else {
        IMAGE_NUMBER--;
        imgs.src=`images/image-${IMAGE_NUMBER}.png`;
        downchangeDot(IMAGE_NUMBER);
    }
}

function nextImage() {
    if (IMAGE_NUMBER === 5) {
        IMAGE_NUMBER = 1;
        imgs.src=`images/image-${IMAGE_NUMBER}.png`;
        upchangeDot(IMAGE_NUMBER);
    } else {
        IMAGE_NUMBER++;
        imgs.src=`images/image-${IMAGE_NUMBER}.png`;
        upchangeDot(IMAGE_NUMBER);
    }
}

function init() {
    leftArrow.addEventListener('click',previousImage);
    rightArrow.addEventListener('click',nextImage);
    dotContainer.addEventListener('click',clickedDot);
}

init();