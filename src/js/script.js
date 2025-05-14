let imagens = [
  '../src/assets/imagemcarroslideshow1.png',
  '../src/assets/imagemcarroslideshow2.jpg',
  '../src/assets/imagemcarroslideshow3.jpg',
  '../src/assets/imagemcarroslideshow4.jpg'
];

let i = 0;
let tempo = 5000;

function slideShow() {
  const img = document.getElementById("image");
  if (img) {
    img.src = imagens[i];
    i = (i + 1) % imagens.length;
    setTimeout(slideShow, tempo);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btnEsq = document.getElementById("esquerda");
  const btnDir = document.getElementById("direita");

  if (btnEsq && btnDir) {
    btnEsq.addEventListener("click", () => {
      i = (i - 1 + imagens.length) % imagens.length;
      document.getElementById("image").src = imagens[i];
    });

    btnDir.addEventListener("click", () => {
      i = (i + 1) % imagens.length;
      document.getElementById("image").src = imagens[i];
    });
  }

  if (document.getElementById("image")) {
    slideShow();
  }
});