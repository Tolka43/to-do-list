const taskInput = document.querySelector(".task-input");
const addButton = document.querySelector(".add-button");
const tasksDiv = document.querySelector(".tasks");

const addTask = () => {
  const taskDiv = document.createElement("div");
  const bin = document.createElement('i')
  
  taskDiv.classList.add("task-div");
  bin.classList.add('fas', 'fa-trash')

  taskDiv.innerHTML = taskInput.value;
  taskInput.value = "";

  taskDiv.appendChild(bin)
  tasksDiv.appendChild(taskDiv);
};

addButton.addEventListener("click", addTask);