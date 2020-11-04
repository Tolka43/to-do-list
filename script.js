const taskInput = document.querySelector(".task-input");
const addButton = document.querySelector(".add-button");
const tasksDiv = document.querySelector(".tasks");
const body = document.querySelector("body");

const createTask = () => {
  const taskDiv = document.createElement("div");

  taskDiv.classList.add("task-div");

  taskDiv.innerHTML = taskInput.value;
  taskInput.value = "";

  function tasksAction() {
    taskDiv.style.textDecoration = "line-through";
    taskDiv.style.color = "grey";
  }

  taskDiv.addEventListener("click", tasksAction);

  return taskDiv;
};

const addTask = () => {
  if (taskInput.value) {
    tasksDiv.appendChild(createTask());
  } else {
    alert("Pole musi zostać wypełnione tekstem");
  }
};

addButton.addEventListener("click", addTask);

const enterKeydownListener = (event) =>{
  if (event.key === "Enter") {
    return addTask();
  }
};

body.addEventListener("keydown", enterKeydownListener);
