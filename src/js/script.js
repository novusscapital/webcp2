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
  i++;
  if (i >= imagens.length) {
    i = 0;
  }
  setTimeout(slideShow, tempo);
}

slideShow();