// imports
import { tasksServices } from "./task-services.js";
import taskTemplate from "./task-template.js";
import Task from "./Task.js";

// declaration of consts
const formElement = document.forms.namedItem("task");
// const inputElement1 = document.getElementById("title-task-input");
// const inputElement2 = document.getElementById("description-task-input");

const tasksContainer = document.getElementById("tasks-container");

// events of the application
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const { title, description } = formElement;
  const task = new Task(title.value, description.value);

  tasksServices.createTask(task).then(() => alert("Tarefa cadastrada com sucesso!"));
});

// template of tasks
function returnTasks() {
  tasksServices.readTasks().then(tasks => {
    tasks.forEach(task => {
      tasksContainer.innerHTML += taskTemplate(task);
    })
  });
};

window.onload = returnTasks;