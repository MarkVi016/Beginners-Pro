import { tasksServices } from "./task-services.js";

// creation of template and edit and delete functions 
export default function taskTemplate(task) {
  return `
  <div class="bg-white p-3 rounded mb-1 flex justify-between items-center flex-wrap">
    <div>
      <p>${task.title}</p>
      <p>${task.description}</p>
    </div>
    <div class="flex justify-between flex-wrap" id="task-icon">
      <button
        onclick="editTask(${task.id}, ${task.done})"
        class="m-1"
        type="reset"
        ${task.done ? `title='Marcar como "não feito"'` : `title='Marcar como "feito"'`}
      >
        ${task.done ? ('<i class="fa-solid fa-check"></i>') : ('<i class="fa-solid fa-x"></i>')}
      </button>
      <button
        onclick="deleteTask(${task.id})"
        class="m-1"
        title="Excluir essa tarefa"
      >
      <i class="far fa-trash-alt text-black" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  `;
};

window.editTask = (id, state) => {
  tasksServices.updateState(id, state);
};

window.deleteTask = (id) => {
  tasksServices.deleteTask(id);
}