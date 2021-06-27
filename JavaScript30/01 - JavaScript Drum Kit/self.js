//여기서는 키보드 누르면 소리 나오게 하는거랑 색 바뀌게 하는거 해야함
const keys = document.querySelectorAll('.key');
// console.log(key);

function playsound(event) {
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (key === null) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function popping(event) {
    if (event.propertyName !== 'transform') {
        return;
    }
    event.target.classList.remove('playing');
}

keys.forEach(function(key) {key.addEventListener('transitionend',popping);});
window.addEventListener('keydown',playsound);