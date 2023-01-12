const form = document.getElementById("form");
const inputName = document.getElementById("nome-contato");
const inputTelefone = document.getElementById("telefone-contato");
let nome = [];
let numero = []
let linhas = "";
let numeroContato = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs();
  quantidadeContatos();
});

function inputs() {
  if (nome.includes(inputName.value)) {
    alert(`Este nome: ${inputName.value} ja foi cadastrado já foi inserida!` );
  } else {
    nome.push(inputName.value);
    numero.push(inputTelefone.value);

    numeroContato++;

    const contagem = document.getElementById("numeros-de-contatos");
    contagem.innerHTML = numeroContato;

    let linha = "<tr>";
    linha += `<td>${inputName.value}</td>`;
    linha += "<td></td>";
    linha += `<td>${inputTelefone.value}</td>`;
    linha += "</tr>";

    linhas += linha;

    const informacao = document.querySelector("tbody");
    informacao.innerHTML = linhas;

    inputName.value = "";
    inputTelefone.value = "";
  }
}
