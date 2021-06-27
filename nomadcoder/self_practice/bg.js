// 배경화면 삽입
const Body = document.querySelector('body');

function init() {
    const Image = document.createElement('img');
    Body.append(Image);
    Image.src=`images/${randomNum()}.jpg`;
}

function randomNum() {
    const randnum = Math.ceil(Math.random()*10);
    return randnum;
}

init();