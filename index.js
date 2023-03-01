const contenantChoixUtilisateur = document.getElementById('choixUtilisateur');
const contenantChoixOrdinateur = document.getElementById('choixOrdinateur');
const spanResultat = document.getElementById('resultat');
const scoreUtil = document.getElementById('scoreUtil');
const scoreOrdi = document.getElementById('scoreOrdi');
const choixBoutons = document.querySelectorAll('button');
const containerJeu = document.getElementById('containerJeu');
const tryAgain = document.getElementById('tryAgain');
let scoreUtilisateur = 0;
let scoreOrdinateur = 0;
let choixUtilisateur;
let choixOrdinateur;


choixBoutons.forEach(choixBouton => choixBouton.addEventListener('click', (e) => {
    resultat.innerHTML = "";
    choixUtilisateur = e.target.id;
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.jpg">`;
    choixOrdinateurs();
    afficherResultat();
    scoreUtil.innerHTML = `${scoreUtilisateur}`;
    scoreOrdi.innerHTML = `${scoreOrdinateur}`;
    resultatFinal();
}));
function choixOrdinateurs() {
    let random = (Math.floor(Math.random() * 3 + 1));
    if (random === 1) {
        choixOrdinateur = "pierre";
    }
    if (random === 2) {
        choixOrdinateur = "feuille";
    }
    if (random === 3) {
        choixOrdinateur = "ciseaux";
    }
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.jpg">`
};

function afficherResultat() {
    if (choixOrdinateur == choixUtilisateur) {
        resultat.innerHTML = "Egalité";
    }
    if (choixOrdinateur == "pierre" && choixUtilisateur == "feuille") {
        resultat.innerHTML = "Tu as gagné !!";
        scoreUtilisateur++;
    }
    if (choixOrdinateur == "pierre" && choixUtilisateur == "ciseaux") {
        resultat.innerHTML = "Tu as perdu !!";
        scoreOrdinateur++;
    }
    if (choixOrdinateur == "feuille" && choixUtilisateur == "pierre") {
        resultat.innerHTML = "Tu as perdu !!";
        scoreOrdinateur++;
    }
    if (choixOrdinateur == "feuille" && choixUtilisateur == "ciseaux") {
        resultat.innerHTML = "Tu as gagné !!";
        scoreUtilisateur++;
    }
    if (choixOrdinateur == "ciseaux" && choixUtilisateur == "feuille") {
        resultat.innerHTML = "Tu as perdu!!";
        scoreOrdinateur++;
    }
    if (choixOrdinateur == "ciseaux" && choixUtilisateur == "pierre") {
        resultat.innerHTML = "Tu as gagné!!";
        scoreUtilisateur++;
    }
}
function resultatFinal() {
    if (scoreUtilisateur === 10) {
        containerJeu.innerHTML = `
        <img src="/image/images.jpeg" class="winner">
        <button id="tryAgain"> Réessayer </button> `;
        choixBoutons.addEventListener("click", () => {
            console.log("test");
        })
    };
    if (scoreOrdinateur === 10) {
        containerJeu.innerHTML = `
        <img src="/image/images2.png" class="loser">
        <button id="tryAgain"> Réessayer </button> `;
        choixBoutons.addEventListener("click", () => {
            console.log("test");
        })
    };

}