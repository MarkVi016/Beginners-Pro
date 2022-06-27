// imports
import { appearModal, disappearThisModal, saveThisCalc, appearForm, appearTask } from "./js/modal.js";
import { returnCalculation, showTask, fillTable } from "./js/showTemplates.js";

// consts
const form = document.forms.namedItem("Form-content");
const formPosition = document.getElementById("form-content");
const taskPosition = document.getElementById("task-content");
const menuPosition = document.getElementById("menu")
const historicPosition = document.getElementById("historic")

const background = document.getElementById("background");
const modal = document.querySelector(".alert-box");
const deleteCalculation = document.getElementById("deleteCalculation");
const saveCalc = document.getElementById("saveCalculation");

const tasksContainer = document.getElementById("task-container");

const table = document.querySelector("table");

// funcionalities menu
menuPosition.addEventListener("click", () => {
  appearForm(formPosition, taskPosition);
});

historicPosition.addEventListener("click", () => {
  appearTask(formPosition, taskPosition);
});

// array
const calculations = [];

// constructor
function Calculation(gtDiario, gtSemanal, gtMensal, gtAnual, criadoEm) {
  this.gtDiario = gtDiario;
  this.gtSemanal = gtSemanal;
  this.gtMensal = gtMensal;
  this.gtAnual = gtAnual;
  this.criadoEm = criadoEm;
};


// save Calculation
function saveCalculation(calculation) {
  calculations.unshift(calculation);
};

// submit of form and return of functions
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {
    dia: new Date().toLocaleDateString(),
    horario: new Date().toLocaleTimeString(),
  };

  const averageCarKM = form.média.value;
  const kmDay = form.km.value;
  const priceFuel = form.preço.value;
  const daysWeek = form.dias.value;

  const dailyExpense = ((kmDay / averageCarKM) * priceFuel);
  const weeklyExpense = dailyExpense * daysWeek;
  const monthlyExpense = weeklyExpense * 4;
  const annualExpense = monthlyExpense * 12;

  const calculation = new Calculation(
    dailyExpense.toFixed(0),
    weeklyExpense.toFixed(0),
    monthlyExpense.toFixed(0),
    annualExpense.toFixed(0),
    `${data.dia} 
    <br>
    ${data.horario}`,
  );

  saveCalculation(calculation);
  returnCalculation(calculation);

  appearModal(formPosition, taskPosition, background, modal);

  fillTable(calculations);
});

// delete Task of Array
function deleteTask(calculation) {
  calculations.splice(calculation, 1);
  returnTask();
};

// delete Object of Array
deleteCalculation.addEventListener("click", () => {

  disappearThisModal(form, formPosition, taskPosition, background, modal);

  deleteTask();
});

function returnTask() {
  tasksContainer.innerHTML = "";
  calculations.forEach((calculation, i) => tasksContainer.innerHTML += showTask(calculation, i));
};

// save Object in Array
saveCalc.addEventListener("click", () => {

  returnTask();

  saveThisCalc(form, formPosition, taskPosition, background, modal);
});

window.deleteTask = deleteTask;

// cration of Excel
document.onload = fillTable(calculations);

function createExcel() {
  const a = document.createElement('a');
  const tipo_dado = 'data:application/vnd.ms-excel';
  const html_tabela = table.outerHTML;

  a.href = tipo_dado + ', ' + html_tabela;
  a.download = 'cadastros.xls';
  a.click();
};

window.createExcel = createExcel;