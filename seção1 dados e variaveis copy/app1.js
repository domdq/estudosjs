/* Tipos de Dados e Variaveis */

/*
Sistema de Cadastro
*/

let nome = "Dom"; //String
let sobrenome = "Dq";
let idade = 22; // Number
const numCliente = "63992";
let valorEmprestimo = 15000;
let taxaDeJuros = 10;
let eBomPagador = "sim";
eBomPagador = true; // Boolean
console.log("olá sr. " + nome, "sua idade e " + idade, "anos");

/* Desafios 1 */
let Nome = "toddy";
let preço = 25;
let validade = true;
console.log(Nome);
console.log(preço);
console.log(validade);

/***** metodos de strings *****/
// comprimento
let MeuNome = "dom";
MeuNome.length; // 3

/*acessando caracteres*/
MeuNome[3]; // d

/*erificando substring*/
let emailValido = "dom@email.com";
emailValido.includes("@"); // retonara true por que existe o @

let emailInvalido = "dom.email.com";
emailInvalido.includes("@"); // retonara false por que não tem o @

/* mudando para maiuscula e minuscula */
let meuNome2 = "Dominick";
meuNome2.toLowerCase; // retonara tudo minuscula "dominick"

meuNome2.toUpperCase; // retonara tudo maiscula "DOMINICK"
