const taskInput = document.querySelector(".task-input");
const addButton = document.querySelector(".add-button");
const tasksDiv = document.querySelector(".tasks");
const body = document.querySelector("body");
const taskSelect = document.querySelector("#tasks-select");

const createTask = (text) => {
  const taskDiv = document.createElement("div");
  const bin = document.createElement("i");
  const textParagraph = document.createElement("p");

  bin.classList.add("fas", "fa-trash");
  taskDiv.classList.add("task-div");
  textParagraph.classList.add("task-text");

  textParagraph.style.color = "black";
  textParagraph.innerHTML = text || taskInput.value;
  taskInput.value = "";

  function binAction() {
    bin.style.cursor = "grab";
    taskDiv.remove();
  }

  bin.addEventListener("click", binAction);

  function tasksAction() {
    if (
      textParagraph.style.color !== "grey" &&
      textParagraph.style.textDecoration !== "line-through"
    ) {
      textParagraph.style.textDecoration = "line-through";
      textParagraph.style.color = "grey";
    } else {
      textParagraph.style.removeProperty("text-decoration");
      textParagraph.style.color = "black";
    }
  }

  taskDiv.addEventListener("click", tasksAction);

  taskDiv.appendChild(textParagraph);
  taskDiv.appendChild(bin);
  return taskDiv;
};

const addTask = () => {
  if (taskInput.value) {
    tasksDiv.appendChild(createTask());
  } else {
    alert("You cannot add empty task!");
  }
};

addButton.addEventListener("click", addTask);

const enterKeydownListener = (event) => {
  if (event.key === "Enter") {
    return addTask();
  }
};

body.addEventListener("keydown", enterKeydownListener);

const filterTasks = () => {
  const taskDivs = Array.from(document.querySelectorAll(".task-div"));

  const taskParagraphs = taskDivs.map((task) => Array.from(task.children)[0]);

  const toDoTasks = taskParagraphs.filter(
    (task) => task.style.color === "black"
  );
  const doneTasks = taskParagraphs.filter((task) => task.style.color == "grey");

  if(taskSelect.value === 'to-do'){
  tasksDiv.innerHTML = "";
  toDoTasks.forEach((task) => tasksDiv.appendChild(createTask(task.innerHTML)));} else if (taskSelect.value === 'done') {
    tasksDiv.innerHTML = "";
    doneTasks.forEach((task) => tasksDiv.appendChild(createTask(task.innerHTML)));
  }


};

// const filterTasks = () => {
//   const tasksArr = Array.from(tasksDiv.children)
//   if(taskSelect.value === 'to-do'){
//     tasksArr.filter((task) => {})
//   }
// }

taskSelect.addEventListener('change', filterTasks)
