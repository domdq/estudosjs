/***** Array *****/
//exemplos de array
const array1 = [elemento0, elemento1, elemento2];
const array2 = array("element0,element1,element2");
const array3 = new array("elemen0, elemen1,elemen2");

//adicionando elemento
const fruta = [];
fruta[0] = "banana";
fruta[1] = "maça";
fruta[2] = "jambo";

//editando os elemntos
fruta[0] = "abacaxi"; // banana acabar trocando pelo abacaxi

/***** acessando um array aleatorio*****/
const pessoas = ["dom", "dq", "domi", "nique", "domzera", "dominique"];
let Aleatorio = Math.floor(Math.random() * 6);
/*math*/ //você pode usar para fazer cálculos. Pense nele como uma calculadora mágica que pode fazer muitas coisas diferentes.

/*floor*/ //pega um número e arredonda para baixo, até o número inteiro mais próximo. Imagine que você tem um número quebrado, como 5.9, e quer arredondar para o número inteiro mais próximo que é menor ou igual a ele. Math.floor vai te dar 5.

/*random*/ // gera um número aleatório entre 0 (inclusive) e 1 (exclusive). Isso significa que o número pode ser 0.123, 0.678, ou qualquer outro valor entre 0 e 1, mas nunca será 1. Você pode usar Math.random para fazer jogos ou gerar surpresas!

/***** multidimisionais *****/
const clientes = [
  ["dom", 22, true],
  ["domzera", 21, false],
  ["domdq", 20, true],
];
console.table(clientes); // todos os arrays em forma de tabela
console.log(clientes[1][0]); // nome do cliente
console.log(clientes[1][1]); // idade do cliente

clientes.push(["d", 19, false]); // push adicionar mas um array
clientes.pop(); // pop remove um array
console.table(clientes);

//outra forma
const funcionarios = [
  ["ti", "dom", "leo"],
  ["financeiro", "laura", "jefter"],
];
funcionarios.forEach((departamento, indiceDep) => {
  departamento.forEach((funcionario, indiceDep) => {
    console.log("${indiceDep + 1} - ${funcionario}");
  });
});

/***** desafio *****/
function relatorio(array) {
  let ap = 0;
  let rep = 0;
  for (const nota of array) {
    if (nota >= 7) {
      ap = ap + 1;
    } else {
      rep = rep + 1;
    }
  }
  return "aprovados: ${ap}. Reprovados: ${rep}";
}
console.log(relatorio([6, 7, 8, 9, 10]));
