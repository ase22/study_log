const todoForm = document.querySelector('.js-todoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.js-todoList');


//일단 ul에다가 투두리스트를 넣을건데

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        console.log(toDo.id,parseInt(li.id));
        return toDo.id !== parseInt(li.id);
        });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text) {
    const li = document.createElement('li');
    const Delbtn = document.createElement('button');
    const div = document.createElement('span');
    const newID = toDos.length+1;
    div.innerHTML = text;
    Delbtn.innerHTML = '❌';
    Delbtn.addEventListener('click',deleteToDo);
    li.appendChild(div);
    li.appendChild(Delbtn);
    todoList.appendChild(li);
    li.id = newID;
    const toDoObj = {
        text: text,
        id: toDos.length+1,
    };
    toDos.push(toDoObj);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem("toDos",JSON.stringify(toDos));
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    localStorage.setItem('hi',currentValue);
    paintToDo(currentValue);
    todoInput.value='';
}

function loadToDos() {
    const currentToDos = localStorage.getItem("toDos");
    if (currentToDos !==null) {
        const parsedToDos = JSON.parse(currentToDos);
        for(var i = 0;i<parsedToDos.length;i++) {
            paintToDo(parsedToDos[i].text);
        }
    }
}

function init() {
    loadToDos();
    todoForm.addEventListener('submit',handleSubmit);
}

init();