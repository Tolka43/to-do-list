// const taskInput = document.querySelector(".task-input");
// const addButton = document.querySelector(".add-button");
// const tasksDiv = document.querySelector(".tasks");
// const body = document.querySelector("body");
// const taskSelect = document.querySelector("#tasks-select");
// const findTasks = document.querySelector('#find-tasks')
// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// const createTask = (task) => {
//   const taskDiv = document.createElement("div");
//   const bin = document.createElement("i");
//   const textParagraph = document.createElement("p");

//   bin.classList.add("fas", "fa-trash");
//   taskDiv.classList.add("task-div");
//   textParagraph.classList.add("task-text");

//   if (task.state === "to-do") {
//     textParagraph.style.color = "black";
//     textParagraph.style.textDecoration = "none";
//   } else {
//     textParagraph.style.textDecoration = "line-through";
//     textParagraph.style.color = "grey";
//   }
//   textParagraph.innerText = task.text || taskInput.value;
//   taskInput.value = "";

//   function binAction() {
//     bin.style.cursor = "pointer";
//     taskDiv.remove();
//     const taskText = textParagraph.innerText;
//     tasks = tasks.filter((task) => task.text !== taskText);
//     updateTasksInLocalStorage();
//   }

//   bin.addEventListener("click", binAction);

//   function tasksAction() {
//     const taskText = textParagraph.innerText;
//     const task = tasks.filter((task) => taskText === task.text);
//     console.log(task);
//     if (task[0].state === "to-do") {
//       textParagraph.style.textDecoration = "line-through";
//       textParagraph.style.color = "grey";
//       tasks.forEach((task) =>
//         task.text === taskText ? (task.state = "done") : task.state
//       );
//       updateTasksInLocalStorage();
//     } else {
//       textParagraph.style.removeProperty("text-decoration");
//       textParagraph.style.color = "black";
//       tasks.forEach((task) =>
//         task.text === taskText ? (task.state = "to-do") : task.state
//       );
//       updateTasksInLocalStorage();
//     }
//   }

//   taskDiv.addEventListener("click", tasksAction);

//   taskDiv.appendChild(textParagraph);
//   taskDiv.appendChild(bin);
//   return taskDiv;
// };

// function clearTasksDiv() {
//   tasksDiv.innerHTML = "";
// }

// function updateTasksInLocalStorage() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function refreshView() {
//   clearTasksDiv();
//   tasks.forEach((task) => {
//     const taskDiv = createTask(task);
//     tasksDiv.appendChild(taskDiv);
//   });
// }

// const addTask = (text) => {
//   if (text || taskInput.value) {
//     const newTask = { text: text || taskInput.value, state: "to-do" };
//     tasks.push(newTask);
//     updateTasksInLocalStorage();
//     refreshView();
//   } else {
//     alert("You cannot add empty task!");
//   }
// };

// addButton.addEventListener("click", (event) => {
//   addTask();
// });

// refreshView();

// const enterKeydownListener = (event) => {
//   if (event.key === "Enter") {
//     addTask();
//   }
// };

// body.addEventListener("keydown", enterKeydownListener);

// const filterTasksByState = () => {
//   const toDoTasks = tasks.filter((task) => task.state === "to-do");
//   const doneTasks = tasks.filter((task) => task.state === "done");
//   const appendTasksToTasksDiv = (task) => {
//     const taskCard = createTask(task);
//     tasksDiv.appendChild(taskCard);
//   };

//   if (taskSelect.value === "to-do") {
//     clearTasksDiv();
//     toDoTasks.forEach(appendTasksToTasksDiv);
//   } else if (taskSelect.value === "done") {
//     clearTasksDiv();
//     doneTasks.forEach(appendTasksToTasksDiv);
//   } else {
//     refreshView();
//   }
// };

// taskSelect.addEventListener("change", filterTasksByState);

// const filterTasksByLetters = () => {

// }

// findTasks.addEventListener('change', filterTasksByLetters)