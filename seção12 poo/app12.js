/*Aqui, fizemos uma "fábrica" que cria bonecos com um nome.*/

function Boneco(nome) {
  this.nome = nome;
}

/*Aqui, estamos dizendo que todos os bonecos feitos pela nossa "fábrica"
 podem falar.*/

Boneco.prototype.falar = function () {
  console.log("Oi, eu sou o " + this.nome + "!");
};

/* Aqui, estamos dizendo que todos os bonecos feitos pela nossa "fábrica" podem falar.

Criamos bonecos e os fazemos falar:*/

let boneco1 = new Boneco("Superman");
let boneco2 = new Boneco("Batman");

boneco1.falar(); // Oi, eu sou o Superman!
boneco2.falar(); // Oi, eu sou o Batman!
