function mover() {
  var elemento = document.getElementById("elemento");
  var alturaJanela = window.innerHeight;
  var larguraJanela = window.innerWidth;
  var novaPosicaoX = Math.floor(Math.random() * larguraJanela);
  var novaPosicaoY = Math.floor(Math.random() * alturaJanela);
  elemento.style.position = "absolute";
  elemento.style.left = novaPosicaoX + "px";
  elemento.style.top = novaPosicaoY + "px";
}

function clicar(){
  window.open('https://www.youtube.com/watch?v=izGwDsrQ1eQ');
}

