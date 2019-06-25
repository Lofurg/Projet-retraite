window.addEventListener('load', function () {
    window.document.querySelector("#mail").addEventListener("click",affichage); //Sur action d'un clic sur l'enveloppe, le fieldset apparaît.
});

function affichage(){
    window.document.querySelector("#corps").style.display = "block";
}