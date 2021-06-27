// 이름을 쓴 후 엔터를 누르면 치는 칸이 사라지고 이름이 생긴다.
const submitBox = document.querySelector('.submit-box');
const inputName = submitBox.querySelector('input');
const userName = document.querySelector('.name');

const USER_NAME = 'USER_NAME';

function loadName() {
    const name = localStorage.getItem(USER_NAME);
    if (name !== null) {
        paintName(name);
    } else {
        submitBox.addEventListener('submit',func2);
    }
}

function func2(event) {
    event.preventDefault();
    const name = inputName.value;
    paintName(name);
    saveName(name);
}

function saveName(name) {
    localStorage.setItem(USER_NAME,name);
}

function paintName(text) {
    submitBox.classList.add('noshowing');
    userName.innerText = `Hello, ${text} \n you have to do...`;
}

function init() {
    loadName();
}

init();
