const weekday = document.querySelector('.week-day');
const monthYear = document.querySelector('.month-year');
const table = document.querySelector('table');
const tr1 = table.querySelector('#tr1');
const tr2 = table.querySelector('#tr2');
const tr3 = table.querySelector('#tr3');
const tr4 = table.querySelector('#tr4');
const tr5 = table.querySelector('#tr5');
const tr6 = table.querySelector('#tr6');
const trs = [tr1,tr2,tr3,tr4,tr5,tr6];
const leftbtn = document.querySelector('#left-arrow');
const rightbtn = document.querySelector('#right-arrow');

// 각 날짜를 클릭하면 그 날짜의 요일과 날짜가 보여져야함
// 현재 달 1일 요일만 알면 가능한가? 전달로 가면 현재달 1일의 요일-1 하면 되고 다음달은 현재달 마지막 날의 요일+1 이걸 계속 갱신하면?, 마지막 달까지 쭉 쓰기 이거는 li 생성해서 하는걸로 하면 될거같다. 일수만큼 td만들고 버튼 만들고 토요일까지 채우면 새로운 tr 만들어서 거기에 넣고
    
const weeks = ["SUN","MON","TUE","WEN","THU","FRI","SAT"];
const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP",
    "OCT","NOV","DEC"];
const daysinMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
const date = new Date();
const todaydate = date.getDate();
const todayweek = date.toDateString().substring(0,3).toUpperCase();
const todaymonth = date.toDateString().substring(4,7).toUpperCase();
const todayyear = date.toDateString().substring(11,15).toUpperCase();
let Dates = [];
let weekCount;
let monthCount = date.getMonth();
let firstday = 1;
date.setDate(firstday);
let firstDate = date.toDateString();
console.log(firstDate);
let week = firstDate.substring(0,3).toUpperCase();
let month = firstDate.substring(4,7).toUpperCase();
let nextMonthsFistweekCount;
let year = 2021;


function getweekCount() {
    for (var i=0;i<weeks.length;i++) {
        if (week === weeks[i]) {
            weekCount = i;
        }
    }
}
function getmonthCount() {
    for (var i = 0;i<12;i++) {
        if(month === months[i]) {
            monthCount = i;
        }
    }
}
function resetChalender() {
    for (var i = 0;i<trs.length;i++) {
        trs[i].innerText = '';
    }
}

function getPreviousFirstDay() {
    resetChalender();
    let weekCountOflastDay;
    if (weekCount === 0) {
        weekCountOflastDay = 6;
    } else {
        weekCountOflastDay = weekCount-1;
    }
    console.log(weekCountOflastDay);
    if (monthCount === 0) {
        monthCount = 11;
        year--;
    } else {
        monthCount--;
    }
    month = months[monthCount];
    for (var i=0;i<6;i++) {
        let firstweekDays = daysinMonth[monthCount]-weekCountOflastDay-1-7*i;
        if (firstweekDays<=7) {
            weekCount = 7-firstweekDays;
            week = weeks[weekCount];
            console.log(firstweekDays);
            break;
        }
    }
    console.log(weekCount);
    weekday.innerText = `${weeks[weekCount]} \n 1`
    drawChal();
}

function getNextFirstDay() {
    resetChalender();
    
    if (nextMonthsFistweekCount===7) {
        weekCount=0;
    } else {
        weekCount = nextMonthsFistweekCount;
    }
    week = weeks[weekCount];
    if (monthCount === 11) {
        monthCount = 0;
        year++;
    } else {
        monthCount++;
    }
    month = months[monthCount];
    weekday.innerText = `${weeks[weekCount]} \n 1`
    drawChal();
}

function getWeekNday(event) {
    // console.log(event.target);
    const id = event.target.id;
    let getweek = weekCount-1+parseInt(id);
    let i = 1;
    if (getweek>=7) {
        while (i<10) {
            getweek = getweek-7*i;
            if (getweek<7) {
                break;
            }
        }
    }
    console.log(weeks[getweek]);
    console.log(getweek);
    weekday.innerText = `${weeks[getweek]} \n ${event.target.id}`;
}

function drawChal() {
    getweekCount();
    getmonthCount();
    // console.log(year,todayyear,monthCount,todaymonth);
    if (months[monthCount] === todaymonth && year === parseInt(todayyear)) {
        weekday.innerText = `${todayweek}\n ${todaydate}`;
    }
    monthYear.innerText = `${months[monthCount]} ${year}`;

    for (var i = 0; i<weekCount;i++) {
        // console.log(weekCount);
        const blankTd = document.createElement('td');
        tr1.appendChild(blankTd);

    }
    let trNumber = 0;
    let temp = weekCount;
    for (var i = 0 ; i < daysinMonth[monthCount] ; i++) {
        if (temp === 7) {
            temp = 0;
            trNumber++;
        }
        const td = document.createElement('td');
        const btn = document.createElement('button');
        td.appendChild(btn);
        btn.addEventListener('click',getWeekNday);
        trs[trNumber].appendChild(td);
        btn.id =i+1;
        if (months[monthCount] === todaymonth && year === parseInt(todayyear) && parseInt(btn.id) === todaydate) {
            btn.style.color = 'red';
        }
        btn.innerText = i+1;
        temp++;
        
    }
    nextMonthsFistweekCount = temp;
    // console.log(nextMonthsFistweekCount);
}

function init() {
    drawChal();
    leftbtn.addEventListener('click',getPreviousFirstDay);
    rightbtn.addEventListener('click',getNextFirstDay);
}

init();

// 1. 일단 버튼(날짜)을 생성해서 출력을 해야한다. 생성할때 객체도 만들어서 그안에 넣고 출력한다. 몇번 출력하는지는 for문을 써서 날짜 수만큼 돌린다.
// 2. 버튼을 누르면 객체랑 연결되서 요일,날짜가 출력된다.



// 이렇게 date에서 빼는 식으로 하는건 한계가 있다.
// 따라서 현재 월의 첫날과 마지막 날을 파악한 후 다음 달이 몇개의 일로 되어있는지 본다음에
// 만약 x-1 + 7*y + z 이걸로 할 수 있나?
// x는 첫날의 요일이고  x-1+7*y+z=해달 달의 일수 이렇게 식 세우고 y=1부터 증가시키면서 z가 7보다 작은 범위에 올때까지 하면 z 구할 수 있고 z 구하면 z가 새로운 x가 되고
