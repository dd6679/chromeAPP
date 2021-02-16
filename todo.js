const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function delToDo(event) {
    //HTML 삭제
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    //Array 삭제
    const cleanToDos = toDos.filter(toDo => {
        return toDo.id !== parseInt(li.id);
    })

    //toDos 갱신
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text) {
    const li = document.createElement("li");
    const del = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    del.innerText = "X";
    del.addEventListener("click", delToDo);
    span.innerText = text;
    //넣는곳.appendChild(넣을것)
    li.appendChild(span);
    li.appendChild(del);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos() {
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if (loadedtoDos !== null) {
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }

}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();