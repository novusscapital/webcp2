let imagens = [
  'src/assets/imagemcarroslideshow1.png',
  'src/assets/imagemcarroslideshow2.jpg',
  'src/assets/imagemcarroslideshow3.jpg',
  'src/assets/imagemcarroslideshow4.jpg'
];

let i = 0;
let tempo = 5000;

function slideShow() {
  document.getElementById("image").src = imagens[i];
  i = (i + 1) % imagens.length;
  setTimeout(slideShow, tempo);
}

document.getElementById("esquerda").addEventListener("click", () => {
  i = (i - 1 + imagens.length) % imagens.length;
  document.getElementById("image").src = imagens[i];
});

document.getElementById("direita").addEventListener("click", () => {
  i = (i + 1) % imagens.length;
  document.getElementById("image").src = imagens[i];
});

slideShow();