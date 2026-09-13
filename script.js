const boutonFuyant = document.getElementById('rageButton');
const vraiBouton = document.getElementById('vraiBouton');
const titre = document.querySelector('h1');

// ----- LOGIQUE DU BOUTON FUYANT -----
boutonFuyant.addEventListener('mouseover', function() {
    
    const largeurFenetre = window.innerWidth;
    const hauteurFenetre = window.innerHeight;
    const largeurBouton = boutonFuyant.offsetWidth;
    const hauteurBouton = boutonFuyant.offsetHeight;

    // On récupère la position actuelle du bouton avant de le bouger
    const positionXActuelle = boutonFuyant.offsetLeft;
    const positionYActuelle = boutonFuyant.offsetTop;

    let randomX, randomY;
    let distance = 0;

    // LA BOUCLE MAGIQUE : on continue de calculer TANT QUE le saut fait moins de 400 pixels
    while (distance < 400) {
        randomX = Math.random() * (largeurFenetre - largeurBouton);
        randomY = Math.random() * (hauteurFenetre - hauteurBouton);

        // Théorème de Pythagore pour calculer la distance entre l'ancien et le nouveau point
        let ecartX = randomX - positionXActuelle;
        let ecartY = randomY - positionYActuelle;
        distance = Math.sqrt((ecartX * ecartX) + (ecartY * ecartY));
    }

    boutonFuyant.style.bottom = 'auto';
    boutonFuyant.style.transform = 'none';
    
    // On applique les nouvelles coordonnées (qui sont maintenant garanties d'être loin)
    boutonFuyant.style.left = randomX + 'px';
    boutonFuyant.style.top = randomY + 'px';
});

// Si quelqu'un arrive quand même à cliquer sur le fuyant (ex: écran tactile)
boutonFuyant.addEventListener('click', function() {
    alert("Impossible ! Tu as triché !");
});

// ----- LOGIQUE DU VRAI BOUTON -----
vraiBouton.addEventListener('click', function() {
    titre.innerText = "J'le savait !!!";
    titre.style.color = "#2ecc71";
});