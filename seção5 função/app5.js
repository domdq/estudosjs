/***** funções *****/

/* declaração de função */
function nomeDaFunção(param1, param2, param3) {
  //bloco de codigo
  return; //retorna algo
}
nomeDaFunção(valor1, valor2, valor3);
// Exemplo de função
function calculaMedia(num1, num2, num3) {
  let media = (num1 + num2 + num3) / 3;
  return media;
}
console.log(calculaMedia(5, 50, 85));

//expressão função//
//exemplo
const mediA = function calculamediA(nume1, nume2, nume3) {
  let mediANume = (nume1, nume2, nume3) / 3;
  return mediANume;
};
console.log(mediA(80, 45, 75));

/* Arrow Funcão */
// exemplo de arrow função
const areaQuadrado = (lado) => {
  let area = lado * lado;
  return area;
};
console.log(areaQuadrado(5));
/* parametros */
//exemplo de paramntro
function somaNumeros(n1 = 2, n2 = 5, n3 = 9) {
  return n1 + n2 + n3;
}
console.log(somaNumeros()); // 16
console.log(somaNumeros(10)); // 24
console.log(somaNumeros(10, 8)); // 27
console.log(somaNumeros(10, 8, 6)); // 21

/* Desafio */
function interrogatotio() {
  let numSim = 0;
  let pergunta1 = prompt("vc matou ela");
  let pergunta2 = prompt("vc viu ela");
  let pergunta3 = prompt("vc gosta dela");
  let pergunta4 = prompt("vc devia algo a ela");
  let pergunta5 = prompt("vc roubou ela");
  if (pergunta1 === "sim") {
    numSim = numSim + 1;
  }
  if (pergunta2 === "sim") {
    numSim = numSim + 1;
  }
  if (pergunta3 === "sim") {
    numSim = numSim + 1;
  }
  if (pergunta4 === "sim") {
    numSim = numSim + 1;
  }
  if (pergunta5 === "sim") {
    numSim = numSim + 1;
  }
  return numSim;
}
function classificado(numSim) {
  if (numSim === 5) {
    console.log("culpado");
  } else if (numSim === 4 || numSim === 3) {
    console.log("cumplice");
  } else if (numSim === 2) {
    console.log("suspeito");
  } else {
    console.log("pode emborar");
  }
}
classificado(interrogatotio());
