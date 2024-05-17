///sistema banco///
let nome = "Dom";
let sobrenome = "Dq";
let idade = 22;
const numCliente = 63992;
let valorEmprestimo = 15000;
let taxaDeJuros = 0.1;
let eBomPagador = true;
let numAnos = 6;

// sistema banco operadores//
let juros = valorEmprestimo * taxaDeJuros * numAnos;
let montante = valorEmprestimo + juros;
console.log("valor do emprestimo: " + montante);

// sistema banco com estrutura condicional//
// if and else
if (eBomPagador) {
  console.log("o cliente e bom pagado " + nome);
} else {
  console.log("não e um bom pagador " + nome);
}
// if else and else if
if (idade >= 18 && idade <= 25) {
  taxaDeJuros = 0.09;
} else if (idade >= 26 && idade <= 35) {
  taxaDeJuros = 0.08;
} else {
  taxaDeJuros = 0.07;
}
