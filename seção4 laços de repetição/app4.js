/***** Laços de Repetição *****/

/*
 contador = 1
 enquanto contador <= 50, faça:
 console.log(contador)
contador++
*/

// laço FOR //
for (atribuição; condição; atualização) {}
/*Exemplo de For*/
for (let cont = 1; cont <= 100; cont++) {
  console.log(cont);
}

// Laço WHILE //
while (condition) {}
/*Exemplo WHILE*/
let soma = 0;
let numero;
while (soma < 10) {
  numero = parseInt(prompt("digite o numero"));
  soma = soma + numero;
  console.log(soma);
}

// do while //
do {} while (condition);
{
}
/* Exemplo do while */
do {
  valorEmprestimo = parseInt(prompt("valor de emprestimo"));
  numAnos = parseInt(prompt("valor de anos"));
  juros = valorEmprestimo * taxaDeJuros * numAnos;
  montante = valorEmprestimo + juros;
  console.log(montant);
} while (valorEmprestimo != 0);

/* laço Break e comtinue */
//Break//
while (true) {
  valorEmprestimo = parseInt(prompt("valor de emprestimo"));
  if (valorEmprestimo === 0) {
    break;
  }
  numAnos = parseInt(prompt("valor de anos"));
  juros = valorEmprestimo * taxaDeJuros * numAnos;
  montante = valorEmprestimo + juros;
  console.log(montante);
}

// continue //
/*exemplo*/
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

/* Desafios */
for (let i = 1; i <= 50; i++) {
  console.log("${i} - R$ ${i * 1.99}");
}

let temperatura;
let somaTempera = 0;
let numeroTempera = 0;
while (true) {
  temperatura = parseInt(prompt("temperatura"));
  if (temperatura === 0) {
    break;
  }
  somaTempera = somaTempera + temperatura;
  numeroTempera = numeroTempera + 1;
}
console.log(somaTempera / numeroTempera);
