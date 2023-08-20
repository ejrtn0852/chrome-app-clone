const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoText = document.getElementById("todo-text");

let todoStorageArray =  [];
const TODO_KEY = "todo"

const todoSubmitHandler = (e) => {
    e.preventDefault()
    const todoValue = todoInput.value;
    const todoObj = {
        id: Date.now(),
        text: todoValue,
    };
    todoStorageArray.push(todoObj);
    todoInput.value = "";
    paintTodo(todoObj);
    saveTodo();
}

const paintTodo = (todoObj) => {
    const li = document.createElement("li");
    li.id = todoObj.id;
    const button = document.createElement("button");
    const span = document.createElement("span");
    todoText.appendChild(li);
    li.appendChild(button);
    li.appendChild(span);
    span.innerText = todoObj.text
    button.addEventListener("click", deleteTodo)
}

const deleteTodo = (e) => {
    const li = e.target.parentElement;
    li.remove();
    todoStorageArray = todoStorageArray.filter( (todo) => todo.id !== parseInt(li.id));
    saveTodo();
}

const saveTodo = () =>  {
    localStorage.setItem(TODO_KEY,JSON.stringify(todoStorageArray))
}



todoForm.addEventListener("submit", todoSubmitHandler);

const saveTodos = localStorage.getItem(TODO_KEY);

if(saveTodos !== null) {
    const parseTodo = JSON.parse(localStorage.todo) 
    todoStorageArray = parseTodo;
    parseTodo.forEach(paintTodo);
}