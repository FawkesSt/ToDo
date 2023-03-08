//Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todos = document.querySelector(".todos");
const toast = document.querySelector(".toast-alert");



//Event listener
todoBtn.addEventListener("click", addTodo);
todos.addEventListener("click", deleteCheck);


function addTodo(event) {
  event.preventDefault();

  if (todoInput.value === "") {
    // const toastAlert = document.createElement("p");
    // toastAlert.innerText = "Please fill the input field";
    // toast.appendChild(toastAlert);
    alert("Please fill the input field");
  } else {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
  
    const createdTime = document.createElement("p");
    createdTime.classList.add("created-time");
    createdTime.innerHTML = moment().format("[Created in ]MMM Do, hA");
    newTodo.appendChild(createdTime);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    todoDiv.appendChild(buttons);

    const completBtn = document.createElement("button");
    completBtn.classList.add("complete-btn");
    completBtn.innerText = "Mark as done";
    buttons.appendChild(completBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `Delete<i class="bi bi-trash"></i>`;
    buttons.appendChild(deleteBtn);
  
    todos.appendChild(todoDiv);
    todoInput.value = "";

    
  }
}


function deleteCheck(e){
  const item = e.target;

  //Delete todo
  if(item.classList[0] === "delete-btn"){
    const todo = item.parentElement;
    todoParent = todo.parentElement;
    todoParent.remove();
    console.log(todoParent);
  }

  if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todoParent = todo.parentElement;
    todoParent.classList.add("completed");
    console.log(item);
    item.innerHTML = `Done<i class="bi bi-check"></i>`;
    
  }
  
}