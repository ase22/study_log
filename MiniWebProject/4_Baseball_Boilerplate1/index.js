const startBtn = document.querySelector('#game-start-btn');
const userNumberBox = document.querySelector('.user-number-box');
const strikeBall = document.querySelector('.strike-ball');
const input = document.querySelector('input');
const restartBtn = document.querySelector('#restart-btn');
let randomNumber = 0;
let strike = 0;
let ball = 0;
let chance = 10;
function setRandomNumber() {
    let i = 0;
    while(i<1) {
        let tempNumber = Math.floor(Math.random()*1000);
        if (tempNumber>=100) {
            randomNumber = tempNumber;
            i++;
        }
    }
    console.log(randomNumber);
    input.classList.remove('noshowing');
    input.classList.add('showing');
    userNumberBox.addEventListener('submit',submituserNumber);
}

function compareNumber() {
    const ranThird = Math.floor(randomNumber/100);
    const ranSecond = Math.floor((randomNumber-100*ranThird)/10);
    const ranFirst = (randomNumber-100*ranThird-10*ranSecond);
    const randomNumberArr = [ranThird,ranSecond,ranFirst];
    const userThird = Math.floor(input.value/100);
    const userSecond = Math.floor((input.value-100*userThird)/10);
    const userFirst = (input.value-100*userThird-10*userSecond);
    const userNumberArr = [userThird,userSecond,userFirst];
    console.log(randomNumberArr,userNumberArr);
    for (let i = 0;i<3;i++) {
        if (randomNumberArr[i]===userNumberArr[i]) {
            strike++;
        }
    }
    for (let i=0;i<3;i++) {
        for (let j=0;j<3;j++) {
            if (userNumberArr[i] === randomNumberArr[j] && i!==j) {
                    ball++;
            }
        }
    }
    input.value='';
    paintScore();

}

function paintScore() {
    strikeBall.innerText =`strike: ${strike} ball: ${ball}`;
    strike = 0;
    ball = 0;
}


function restart() {
    chance=10;
    strikeBall.innerText = '';
    strike = 0;
    ball = 0;
    input.value='';
}

function submituserNumber(event) {
    event.preventDefault();
    if (chance>0) {
        if (input.value>=100 && input.value<1000) {
            compareNumber();
            chance--;
        } else {
            alert('세자리 숫자를 입력해 주세요.');
            input.value='';
        }
    }   else {
        alert('기회를 다 사용했습니다.');
    }
}

function init() {
    startBtn.addEventListener('click',setRandomNumber);
    restartBtn.addEventListener('click',restart);
}

init();