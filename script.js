let posicaoAtual = 0;
const carrossel = document.getElementById('carrossel');
const filmes = document.querySelectorAll('.filme');
const larguraFilme = filmes[0].offsetWidth + 20; // largura do filme + margem

function avancar() {
  if (posicaoAtual < filmes.length - 3) { // exibe 3 por vez
    posicaoAtual++;
    atualizarCarrossel();
  }
}

function voltar() {
  if (posicaoAtual > 0) {
    posicaoAtual--;
    atualizarCarrossel();
  }
}

function atualizarCarrossel() {
  carrossel.style.transform = `translateX(-${posicaoAtual * larguraFilme}px)`;
}
