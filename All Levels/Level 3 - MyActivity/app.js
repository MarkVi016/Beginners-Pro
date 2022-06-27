const formulario = document.forms.namedItem("dados");
const tabela = document.getElementById("tabela")
const consulta = document.getElementById("consulta")
const fechaConsulta = document.getElementById("fechaModal")
const body = document.querySelector("body")

// Função construtora para obter os dados
function Dados(nome, telefone, especialidade, data) {
  this.nome = nome;
  this.telefone = telefone;
  this.especialidade = especialidade;
  this.data = data;
}

// Função exibe modal com dados
function ExibeConsulta(dados) {
  return `
   <tr>
      <td>${dados.nome}</td>
      <td>${dados.telefone}</td>
      <td>${dados.especialidade}</td>
      <td>${dados.data}</td>
    </tr>
  `;
}

function RetornaConsulta(dados) {
  tabela.innerHTML += ExibeConsulta(dados)
}

// Ao enviar gera os eventos de aparecer a tabela com os dados digitados para o usuário 
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const dados = new Dados(
    formulario.nome.value,
    formulario.telefone.value,
    formulario.especialidade.value,
    formulario.data.value,
  );

  RetornaConsulta(dados);

  consulta.style.display = "flex";
  body.style.background = "rgba(241 241 241)";
})

// Função para fechar o modal
fechaConsulta.addEventListener("click", () => {
  formulario.reset();
  formulario.nome.focus();

  consulta.style.display = "none"
  body.style.background = "white";
});

