// imports
import templateRepository from "./js/templateRepository.js";

// declaration of consts
const inputElement = document.querySelector("main")
const inputUser = document.getElementById("user");
const repositoriesContent = document.querySelector("#container");

document.onload = inputElement.classList.add("padding");

// search repositories
let repositoriesArray = [];
console.log(repositoriesArray);

// constructor
function Object(name, avatar_url, stargazers_count, forks, created_at, clone) {
  this.name = name;
  this.avatar_url = avatar_url;
  this.stargazers_count = stargazers_count;
  this.forks = forks;
  this.created_at = created_at;
  this.clone = clone;
};

// save Object in Array
function saveObject(object) {
  repositoriesArray.push(object);
};

function searchRepositories(user, sucess, error) {
  const url = `https://api.github.com/users/${user}/repos`;
  const request = new XMLHttpRequest();
  request.open("GET", url);

  request.onload = () => {
    if (request.status === 200) {
      const results = JSON.parse(request.responseText);
      sucess(results);

      results.forEach(result => {
        const objetoData = {
          ano: new Date(result.created_at).toLocaleDateString(),
          hora: new Date(result.created_at).toLocaleTimeString(),
        }

        const object = new Object(
          repositoriesArray.name = (result.name),
          repositoriesArray.avatar_url = (result.owner.avatar_url),
          repositoriesArray.stargazers_count = (result.stargazers_count),
          repositoriesArray.forks = (result.forks),
          repositoriesArray.created_at = `${objetoData.ano} 
          -
          ${objetoData.hora}`,
          repositoriesArray.clone = (result.clone_url)
        );

        saveObject(object)
      });

    } else {
      inputElement.classList.add("padding");
      const mensagemErro = JSON.parse(request.responseText);
      const status = request.status;

      error({ mensagemErro: mensagemErro.message, status });
    }
  };

  request.send();
}

// The function will make a list of repositories from the user typed 
function repositoryList(repositories) {
  repositoriesContent.innerHTML = '';
  repositories.forEach((repository, i) => {

    repositoriesContent.innerHTML += templateRepository(repository, i);
  });

};

function seeDetails(result) {
  console.log(result);
  Swal.fire({
    html: `
          <div class="modalContent">
            <h3 class=title>${repositoriesArray[result].name}</h3>

            <img class="repositoryPicture" src="${repositoriesArray[result].avatar_url}">

            <div class="forks\stars">
              <p>
                Estrelas ${repositoriesArray[result].stargazers_count} | Forks ${repositoriesArray[result].forks}
              </p>
            </div>

            <p class="createTime"> Criado em ${repositoriesArray[result].created_at}
        </div>
    `,
    footer: `<a target="_blank" href="${repositoriesArray[result].clone}">Clonar repositório</a>`,
    icon: "success",
  })
}


window.seeDetails = seeDetails;

// The function will manipulate the error and return the alert
function handleError({ mensagemErro, status }) {
  alert(`Repositório não encontrado, status ${status} -> ${mensagemErro}`);
}

// The event will capture the value of the repositories
// and perform the function searchRepositories
inputUser.addEventListener("blur", ({ target }) => {
  repositoriesArray.length = 0;
  inputElement.classList.remove("padding");
  const user = target.value
  searchRepositories(user, repositoryList, handleError)
});



