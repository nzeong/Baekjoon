const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}//x버튼 누르면 뭐하는지

function paintToDo(newTodo){
    const li = document.createElement("li");//"html요소"
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);//append항상 마지막
   //js로 html만드는 중
    toDoList.appendChild(li);
}//입력값 가지고 뭐 할건지

function handle(event){
    event.preventDefault();
    const newTodo = toDoInput.value;//입력값 이미 복사함
    toDoInput.value = "";//그 뒤에 뭐하든 전 실행에 영향x
    const newTodoObj={
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);//입력값 가지고 뭐 할건지
    saveToDos();
}

toDoForm.addEventListener("submit", handle);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null ){
    const parsedToDos = JSON.parse(savedToDos);//입력된 각각의 array
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);//각각의 item에 함수 실행 가능
}















