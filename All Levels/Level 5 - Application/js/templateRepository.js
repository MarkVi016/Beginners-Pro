export default function templateRepository(repository, i) {
  return `
          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="115" 
                role="img" aria-label="Placeholder: Repositório" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Repositório</title>
                <rect width="100%" height="100%" fill="#161B22"></rect><text x="8%" y="50%" fill="#eceeef"
                  dy=".3em">${repository.full_name}</text>
              </svg>

              <div class="card-body" style="height:90px">
                <p class="card-text"></p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a type="button" class="btn btn-sm btn-outline-dark" href="${repository.html_url}" target="_blank">Repositório</a>
                    <button type="button" class="btn btn-sm btn-outline-dark" onclick="seeDetails(${i})">Detalhes</button>
                  </div>
                  <small class="text-muted">id: ${(repository.id)}</small>
                </div>
              </div>
            </div>
          </div>
  `
}