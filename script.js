

const container = document.getElementById("container");



const nome = document.getElementById("name");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");

const listaEmails = [];
const listaNomes = [];
const listaTelefones = [];




function salvar() {
  listaEmails.push(email.value);
  listaNomes.push(nome.value);
  listaTelefones.push(telefone.value);

  console.log(listaEmails);
  console.log(listaNomes);
  console.log(listaTelefones);
}

function listar() {

  for (let index = 0; index < listaEmails.length; index++) {
    const criarNome = document.createElement("h3");
    const criarEmail = document.createElement("h3");
    const criarTelefone = document.createElement("h3");

    const data = document.createElement("div")
    data.classList.add("card");

    data.innerHTML = `
    <h2>${criarNome}</h2>
    <h2>${criarEmail}</h2> 
    <h2>${criarTelefone}</h2>
    `
    container.appendChild(data); 
  }
}
