// Creation of CRUD (Create, Read, Update, Delete)
async function createTask(task) {
  try {
    return await fetch("http://localhost:3000/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  } catch (error) {
    alert(`verifique se o servidor está on-line! Erro: ${error.message}`)
  };
};

async function readTasks() {
  try {
    const taskJSON = await fetch("http://localhost:3000/tasks")
    return await taskJSON.json();
  } catch (error) {
    alert(`verifique se o servidor está on-line! Erro: ${error.message}`)
  };
};

async function updateState(id, state) {
  try {
    return await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ done: !state }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (error) {
    alert(`Verifique se o servidor está online! Erro: ${error.message}`);
  };
};

async function deleteTask(id) {
  try {
    return await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    alert(`Verifique se o servidor está online! Erro: ${error.message}`);
  };
};

export const tasksServices = {
  createTask,
  readTasks,
  updateState,
  deleteTask
};