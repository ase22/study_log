const bg = document.querySelector('.bg');
const hexcolor = bg.querySelector('.hexcolor');
const input = bg.querySelector('input');

function makeRandomNumber() {
    const randomIndex = Math.floor(Math.random()*16);
    return randomIndex;
}

function createHexcode() {
    let hexcode = '';
    const hex= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    for (let i = 0;i<6;i++) {
        hexcode +=hex[makeRandomNumber()];
    }
    console.log(hexcode);
    paintHexCode(hexcode);
}

function paintHexCode(hexcode) {
    hexcolor.innerText = `HEX COLOR : #${hexcode}`;
    bg.style.backgroundColor = `#${hexcode}`;
}

function init() {
    input.addEventListener('click',createHexcode);
}

init();