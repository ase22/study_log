const ClockBox = document.querySelector('.clock-box');
const Clock = ClockBox.querySelector('h1');

function getTime() {
    const time = new Date();
    Clock.innerText = `${time.getHours() <10? `0${time.getHours()}`:time.getHours()}:${time.getMinutes()<10? `0${time.getMinutes()}`:time.getMinutes()}:${time.getSeconds() <10? `0${time.getSeconds()}`:time.getSeconds()}`;
}

function init() {
    getTime();
}

setInterval(init,1000);
