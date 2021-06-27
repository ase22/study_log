/*
할일 적고 엔터 누르면 할일 적은거 초기화되면서 밑에 할일이 생성되고 X버튼도 생긴다.
X버튼을 누르면 할일이 지워진다.

초기화 방지
할일 쓴다음 엔터 누르면 submit addeventlistener 해서 감지하고 함수 호출
호출하면 텍스트는 ''으로 초기화되고 리스트가 생성되고 이 리스트는 id,button이 있고 배열에 담기며 배열의 이름은 ToDos이고 배열의 요소는 객체로, 객체의 요소는 id,todo가 있다. 
함수 호출하면
paint 만들어야함
리스트 생성해서 ul에 넣어야함
필요 함수: init, 로컬스토리지에 투두스의 getItem값이 null인지 아닌지 판별하는 함수(있으면 페인팅 함수 호출, null이면 로컬스트리지에 저장하는 함수 실행 후 페인트 함수 실행  )


1단게: 할일 적고 엔터치면 밑에 생성되게 하기
2단게: 지우는 버튼 추가하기
3단게: 지우기 버튼 누르면 지워지게 하기
4단게: 새로고침해도 남아있게 하기
*/
const todoForm = document.querySelector('.todoForm'); //form 태그
const input = todoForm.querySelector('input'); // input 태그
const todoLists = document.querySelector('.todolists'); // 투두리스트들

let ToDos = [];

function Delbtn(event) {
    // 해당 리스트의 id를 찾아서 그 리스트가 속하지 않을 때의 경우에 새로운 배열에 저장한 후 paintToDos에 넣은 다음 새배열=ToDos 하면 된다.
    // 해당 리스트의 id를 찾는법?
    // console.log(event.target);
    // console.log(event.target.parentNode);
    // console.dir(event.target);
    const btn = event.target;
    const li = btn.parentNode;
    console.log(li.id);
    todoLists.removeChild(li);
    const cleanToDos = ToDos.filter(function(todo) {
        return parseInt(li.id) !==todo.id;
    });
    // console.log(cleanToDos);
    ToDos = cleanToDos;
    saveToDos();
}


function saveToDos() {
    const stringedToDos = JSON.stringify(ToDos);
    localStorage.setItem("ToDos",stringedToDos);
}

function loadToDos() {
    const loadedtodos = localStorage.getItem("ToDos");
    console.log(loadedtodos);
    if (loadedtodos !== null) {
        const parsedToDos = JSON.parse(loadedtodos);
        // console.log(parsedToDos);
        parsedToDos.forEach(element => {
            console.log(element);
            paintToDos(element.text);
        });
    } 
}

function paintToDos(text) {
    input.value = '';
    const newli = document.createElement('li');
    const newbtn = document.createElement('button');
    const span = document.createElement('span');
    const newID = ToDos.length+1;
    newli.id = newID;
    newbtn.innerText = '⭕️';
    newbtn.addEventListener('click', Delbtn);
    span.innerText = text;
    todoLists.appendChild(newli);
    newli.appendChild(span);
    newli.appendChild(newbtn);
    const todosObj = {
        id:newID,
        text:text,
    };
    ToDos.push(todosObj);
    saveToDos();
}

function func1(event) {
    event.preventDefault();
    const todolist = input.value;
    paintToDos(todolist);
}

function init() {
    loadToDos();
    todoForm.addEventListener('submit',func1);
}

init();
