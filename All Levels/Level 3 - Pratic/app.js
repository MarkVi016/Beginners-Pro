// seleção de elementos da DOM
const inputElement = document.querySelector(".new-task-input"); //input
const addTaskButton = document.querySelector(".new-task-button"); //botão

const tasksContainer = document.querySelector(".tasks-container"); //div para inserir tarefas

// validação
const validateInput = () => inputElement.value.trim().length > 0;

// Função construtora para obter os dados
function Task(task) {
  this.task = task;
}

// Função exibe lista com dados
function ExibeTask(dados) {
  return `
    <div class="task-item">
      <p>${dados.task}</p>
      <i class="far fa-trash-alt" aria-hidden="true" onclick="parentElement.remove()" >
      </i>
    </div>
  `;
}

function RetornaTask(dados) {
  tasksContainer.innerHTML += ExibeTask(dados)
}

// ao clicar no botão e o input não estiver preenchido será adicionado "error"
// caso esteja preenchido, a tarefa sera adicionada abaixo
function AddTask() {

  // validação
  const inputIsValid = validateInput();
  // válido

  // inválido
  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }

  const dados = new Task(
    inputElement.value,
  );

  RetornaTask(dados);

  // limpa input
  inputElement.value = "";

};

// ao mudar o input e estiver preenchido sera removido "error"
function InputChange() {
  const inputIsValid = validateInput();

  // remoção da class "error", caso for válido
  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
};


addTaskButton.addEventListener("click", () => AddTask());

inputElement.addEventListener("change", () => InputChange());

// função para marcar tarefa
function selectTask(select) {
  select.target.style = "text-decoration: line-through;"
}

tasksContainer.addEventListener("click", selectTask)

// fução para desmarcar tarefa
function deselectTask(deselect) {
  deselect.target.style = "text-decoration: none;"
}

tasksContainer.addEventListener("dblclick", deselectTask)
