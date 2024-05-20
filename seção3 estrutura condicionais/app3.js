/***** estrutura condicional *****/

/// if and else ///
if (condição) {
  //bloco de codigo 1
} else {
  //bloco de codigo 2
}
/*Exemplo if else*/
let fiel = true;
let nome = "Dominique";
if (fiel) {
  console.log(nome + "e fiel");
} else {
  console.log(nome + "não e fiel");
}

/// if else and else if ///
if (condição1) {
  // bloco de codigo 1
} else if (condição2) {
  //bloco de codigo 2
} else {
  //bloco de codico 3
}
/*Exemplo de if, else, else if*/
let idades = 22;
let juro = 5.5;
if (idades >= 20 && idades <= 25) {
  Juro = 5.5;
} else if (idades >= 25 && idades <= 30) {
  juro = 5.0;
} else {
  taxaDeJuros = 0.0;
}

/// Switch ///
switch (expressao) {
  case "rotulo1":
    //bloco codigo1
    break;
  case "rotulo2":
    //bloco codigo2
    break;
  case "rotulo3":
    //bloco codigo3
    break;
  case "rotulo4":
    //bloco codigo4
    break;
  case "rotulo5":
    //bloco codigo5
    break;
  case "rotulo6":
    //bloco codigo6
    break;
  default:
}

/*Exemplo switch*/
let cargo = "gerente";
switch (cargo) {
  case "dev junior":
    console.log("dev junior ganhar 3k");
    break;
  case "dev senio":
    console.log("dev senio ganhar 6k");
    break;
  case "dev pleno":
    console.log("dev pleno ganhar 9k");
    break;
  case "gerente":
    console.log("Não cadastrado");
    break;
  default:
}

// Desafio3//
let tempo1 = 15;
let tempo2 = 18;
let tempo3 = 10;
if (tempo1 < tempo2 && tempo1 < tempo3) {
  console.log("corredor 1 ganhou");
} else if (tempo2 < tempo1 && tempo2 < tempo3) {
  console.log("corredor2 ganhou");
} else {
  console.log("corredor3 ganhou");
}
