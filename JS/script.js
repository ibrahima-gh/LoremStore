const slide = ["IMG/fortnite.png", "Mario.jpg", "Nintendo.jpg", "PS5.webp"];
let avancer = document.getElementById("avancer");
let numero = 0;





var listeImages = ["IMG/PS5.jpg", "IMG/Xbox.jpg", "IMG/Mario.jpg", "IMG/Zelda.jpg","IMG/Zelda_2.jpg","IMG/Ubisoft.jpg"];
        
var indexImageCourante = 0;
function soupe() {
    if (indexImageCourante > 0) {
        indexImageCourante--;
    } else {
        indexImageCourante = listeImages.length - 1;
    }
    afficherImageCourante();
}
function test() {
    if (indexImageCourante < listeImages.length - 1) {
        indexImageCourante++;
    } else {
        indexImageCourante = 0;
    }
    afficherImageCourante();
}
function afficherImageCourante() {
    var monImage = document.getElementById("slid");
    monImage.src = listeImages[indexImageCourante];
}
function defilementVersLeBas() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}
