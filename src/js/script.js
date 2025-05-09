let imagem=[
    'src/assets/imagemcarroslideshow1.jpg',
    'src/assets/imagenscarroslideshow2.jpg',
    'src/assets/imagenscarroslideshow3.jpg',
]

let i=0;
let tempo = 5000;

function slideshow(){
    document.getElementById('image').src = imagem[i];
    i++;
    if(i == imagem.length){
        i=0;
    }
    setTimeout("slideshow()",tempo)
}
slideshow();