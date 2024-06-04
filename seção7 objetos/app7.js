/***** objetos *****/
//exemplo de como criar um objetos//
const carro = {
  nome: "M4",
  marca: "BMW",
  cor: "Preto",
  ano: 2023,
  emplacodo: true,
  moto: [250, 2.0],
};
//acesando o elemento//
/* anotação por ponto */
//exemplo
carro.nome;
carro.marca;
console.log(carro.nome);
console.log(carro.marca);

//adicionando elemento
carro.consumo = 25; // acabou adicionando mas um elemnto

//removendo um elemento
delete carro.consumo; // usando o delete ele remove o elemento

/***** metodo em objeto *****/
//exemplo
const carro2 = {
  nome: "gol",
  marca: "fiat",
  ano: "2015",
  temPlaca: true,
  consumo: 12,
  tanqueCapacidade: 45,
  moto: {
    cavalos: 125,
    cilindrada: 1.2,
  },
  kmCorrido: function () {
    return `o ${carro2.nome} pecorre 
    ${carro2.consumo * carro2.tanqueCapacidade} km com tanque cheio`;
  },
};
/*Desafio*/
function ocultaSenha(senha) {
  let senhaAux = "";
  for (let i = 0; i < senha.length; i++) {
    senhaAux = senhaAux + "*";
  }
  return senhaAux;
}
const usuario = {
  nome: "Dom",
  email: "dom@gmail.com",
  senha: "2468",
};
usuario.senha = ocultaSenha(usuario.senha);
console.log(usuario);
