const nameContainer = document.querySelector('.js-form');
const nameTitle = nameContainer.querySelector('input');
const greetings = document.querySelector('.js-greetings');

// localStorage.setItem('currentUser','sangeon);
const USER_NAME = 'currentUser';

function paintGreeting(text) {
    nameContainer.classList.add('form');
    nameContainer.classList.remove('showing');
    greetings.innerText = `Hello ${text}`;
}

function saveName(text) {
    localStorage.setItem(USER_NAME,text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = nameTitle.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function AskforName() {
    nameContainer.classList.remove('form');
    nameContainer.classList.add('showing');
    nameContainer.addEventListener('submit',handleSubmit);
}
// 일단 로컬스토리지에 있는 값들을 불러오기로 함
function loadName() {
    const currentUser = localStorage.getItem(USER_NAME);
    if (currentUser === null) {
        AskforName();
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}

init();