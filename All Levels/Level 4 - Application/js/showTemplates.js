// creation of templates
const results = document.getElementById("results");
const tableBody = document.querySelector("tbody");

export function showCalculation(calculation) {
  return `
  <p>
    diariamente: R$${calculation.gtDiario} reais
    <br>
    semanalmente: R$${calculation.gtSemanal} reais
    <br>
    mensalmente: R$${calculation.gtMensal} reais
    <br>
    anualmente: R$${calculation.gtAnual} reais
  </p>
  `;
}

export function returnCalculation(calculation) {
  results.innerHTML = showCalculation(calculation)
}

export function showTask(calculation, i) {
  return `
    <div class="task-item">
      <p>
        diariamente: R$${calculation.gtDiario} reais - semanalmente: R$${calculation.gtSemanal} reais 
        <br>
        mensalmente: R$${calculation.gtMensal} reais - anualmente: R$${calculation.gtAnual} reais
      </p>
      <p class="criadoEm">
        ${calculation.criadoEm}
      </p>
      <i class="far fa-trash-alt" aria-hidden="true" onclick="deleteTask(${i})"></i>
      <i class="fa-solid fa-file-excel" onclick="createExcel(${i})"></i>
      <button>
    </div>
  `;
};

export function fillTable(calculations) {
  calculations.forEach(calculation => {
    tableBody.innerHTML += `
          <tr>
              <td>${calculation.gtDiario}</td>
              <td>${calculation.gtSemanal}</td>
              <td>${calculation.gtMensal}</td>
              <td>${calculation.gtAnual}</td>
          </tr>
      `;
  })
};