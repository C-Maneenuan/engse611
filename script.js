const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
    const todoText = todoInput.value.trim();

  if (todoText.length > 0) {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    todos.push(todo);

    todoInput.value = "";

    renderTodo();

    console.log(todo.id);
    console.log(todo.text);
    console.log(todo.completed);
  }
}

function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodo();
}

function renderTodo() {
  //console.log("renderTodo.");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const deleteButton = document.createElement("button");

    todoText.textContent = todo.text;
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    todoItem.appendChild(todoText); //appendChild   li <- span
    todoText.appendChild(deleteButton); //appendChild  li <- button
    todoList.appendChild(todoItem); //appendChild  ul <- li

  });

}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

renderTodo();


    /* //id=2;
        todos = [
                    {   
                        id: 1,
                        name: "task1"
                    },
                    {
                        id: 2,
                        name: "task2"
                    },
                    {
                        id: 3,
                        name: "task3"
                    },
                ]



    */