// Criar um novo mensageiro (XMLHttpRequest)
let mensageiro = new XMLHttpRequest();

// Dizer ao mensageiro para onde ele deve ir e o que fazer
mensageiro.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

// O que fazer quando o mensageiro voltar com a resposta
mensageiro.onload = function () {
  if (mensageiro.status == 200) {
    // A resposta chegou e está tudo bem
    console.log("Resposta do amigo: " + mensageiro.responseText);
  } else {
    // Algo deu errado
    console.log("O amigo não respondeu. Status: " + mensageiro.status);
  }
};

// Enviar a carta (solicitação)
mensageiro.send();
