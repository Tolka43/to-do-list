const taskInput = document.querySelector(".task-input");
const addButton = document.querySelector(".add-button");
const tasksDiv = document.querySelector(".tasks");
const body = document.querySelector("body");

const createTask = () => {
  const taskDiv = document.createElement("div");
  const bin = document.createElement("i");
  const textParagraph = document.createElement("p");

  bin.classList.add("fas", "fa-trash");
  taskDiv.classList.add("task-div");
  textParagraph.classList.add("task-text");

  textParagraph.innerHTML = taskInput.value;
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
