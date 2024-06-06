const listaFilmes = document.querySelector("#listafilmes");

const filmes = [
  { nome: "x-men", genero: "acção" },
  { nome: "007", genero: "acção" },
  { nome: "Transformers", genero: "acção" },
];

const criaElementosUI = function () {
  let aux = "";
  filmes.forEach((filmes) => {
    aux = aux + `<li> Nome: ${filmes.nome} Gênero: ${filmes.genero}`;
  });
  listaFilmes.innerHTML = aux;
};
function exibeFilmes() {
  setTimeout(criaElementosUI, 2000);
}
function addfilme(filme) {
  setTimeout(() => {
    filmes.push(filme);
  }, 3000);
  console.log(filmes);
}
addfilme({ nome: "call of duty black ops" });
exibeFilmes();

/*****  CALLBACK *****/
// Função que simula pedir uma pizza
function pedirPizza(callback) {
  console.log("Pedi uma pizza. Aguardando...");
  // Simula o tempo que a pizza demora para ficar pronta
  setTimeout(function () {
    console.log("A pizza está pronta!");
    callback(); // Chama a função callback
  }, 2000); // 2000 milissegundos = 2 segundos
}

// Função que será chamada quando a pizza estiver pronta
function comerPizza() {
  console.log("Estou comendo a pizza!");
}
// Pede a pizza e passa a função comerPizza como callback
pedirPizza(comerPizza);

/***** Promisses *****/
let promessa = new Promise(function (resolve, reject) {
  // Aqui dentro, seu amigo está procurando o brinquedo
  // Se ele encontrar, ele resolve a promessa
  // Se ele não encontrar, ele rejeita a promessa
});

// Quando a promessa for resolvida, você pode brincar com o brinquedo
promessa
  .then(function (brinquedo) {
    // Aqui você brinca com o brinquedo
  })
  .catch(function () {
    // Se a promessa for rejeitada, você não terá um brinquedo
  });

/*****  Async e Await *****/

/*Quando usamos o async em um código, é como se estivéssemos dizendo ei, isso aqui pode demorar um pouquinho, então não pare tudo esperando por isso, tá.*/

/*Já o await é como dizer ok, agora que você está fazendo algo que pode demorar, fique de olho nisso e me avise quando terminar, certo*/

//Vamos ver um exemplo bem simples
async function fazerAlgo() {
  return "feito!";
}

async function principal() {
  let resultado = await fazerAlgo();
  console.log(resultado);
}

principal();
//Aqui, fazerAlgo é uma função que demora um pouco, então usamos async antes dela. Na função principal, usamos await para esperar que fazerAlgo termine, e só então mostramos o resultado no console.
