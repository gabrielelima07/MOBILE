var produtos = ["Mesa", "Cadeira", "Armario", "Geladeira"]

var precos = [10.99, 50.90, 20, 44]

var indice = 0

const container = document.getElementById("container")

for (let item = 0; item < produtos.length; item++) {

    const criarElemento = document.createElement("div")
    const gerarElemento = document.createElement("p")

    const produto = produtos[item];

    criarElemento.innerText = produto

    if (item < precos.length) {
        gerarElemento.innerText = `Preço: R$ ${precos[item].toFixed(2)}`;
    } else {
        gerarElemento.innerText = "Preço: Indisponível";
    }


    criarElemento.appendChild(gerarElemento);
    container.appendChild(criarElemento); 
    }

    const nome = document.getElementById("name")
    const email = document.getElementById("email")
    const telefone = document.getElementById("telefone")

    const listaEmails  = []
    const listaNomes  = []
    const listaTelefones  = []
    
    let NomeProf = ""

    function salvar() {

        listaEmails.push(email.value)
        listaNomes.push(nome.value)
        listaTelefones.push(telefone.value)

        console.log(listaEmails);
        console.log(listaNomes);
        console.log(listaTelefones);
    }

    function listar() {
        listaEmails.push(email.value)
        listaNomes.push(nome.value)
        listaTelefones.push(telefone.value)
         
        for (let index = 0; index < listaEmails.length; index++) {

            const criarNome = document.createElement("h4")
            const criarEmail = document.createElement("h3")
            const criarTelefone = document.createElement("h3")
            
            criarNome.innerText = (listaNomes[index])
            criarEmail.innerText =(listaEmails[index])
            criarTelefone.innerText =(listaTelefones[index])

            container.appendChild(criarNome)
            container.appendChild(criarEmail)
            container.appendChild(criarTelefone)
        }

       }
