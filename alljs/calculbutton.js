/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener("load", function () {
       window.document.querySelector("#btn_envoyer").addEventListener("click",retraite);
});




function retraite() {
    const cote = 0.5;
    const decote = 0.00625;
    let trimdemande = trim();
    let nbtrim = recupVal("#num_nbtrim");
    if (trimdemande <= nbtrim) {
        trimdemande = 0;
    } else {
        trimdemande = trimdemande - nbtrim;
    }
    if(trimdemande >=20){
        trimdemande = 20;
    }
    let moyenne = recupVal("#num_moyenne");
    let retraite = moyenne * (cote - (decote * trimdemande));
    window.document.querySelector("#affiche").innerHTML =
            "Votre retraite sera de : " + retraite + "€ par an";


}

function recupVal(id) {
    var valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}

function trim() {
    let annees = recupVal("#num_annees");
    var Annees = [1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973];
    var Cote = [163, 164, 165, 165, 166, 166, 166, 167, 167, 167, 168, 168, 168, 169, 169, 169, 170, 170, 170, 171, 171, 171, 172];
    for (var i = 0; i < Cote.length; i++) {
        if (annees === Annees[i]) {
            return Cote[i];
        }
        if (annees >= 1973) {
            return 172;
        }
        if(annees <= 1951){
            return 163;
        }
    }
}