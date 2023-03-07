//Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todos = document.querySelector(".todos");
const toast = document.querySelector(".toast-alert");

//Event listener
todoBtn.addEventListener("click", addTodo);

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
    completBtn.innerText = "Complete";
    buttons.appendChild(completBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `<spam class="bi bi-trash">Delete</spam>`;
    buttons.appendChild(deleteBtn);

    todos.appendChild(todoDiv);

    
  }
}
