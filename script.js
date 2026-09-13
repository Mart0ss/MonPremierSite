const bouton = document.getElementById('rageButton');

// L'événement 'mouseover' se déclenche dès que la souris SURVOLE le bouton
bouton.addEventListener('mouseover', function() {
    
    // 1. On récupère la taille actuelle de l'écran du navigateur
    const largeurFenetre = window.innerWidth;
    const hauteurFenetre = window.innerHeight;

    // 2. On récupère la taille du bouton (pour éviter qu'il sorte de l'écran)
    const largeurBouton = bouton.offsetWidth;
    const hauteurBouton = bouton.offsetHeight;

    // 3. On génère des coordonnées aléatoires (Math.random() donne un chiffre entre 0 et 1)
    const randomX = Math.random() * (largeurFenetre - largeurBouton);
    const randomY = Math.random() * (hauteurFenetre - hauteurBouton);

    // 4. On annule la position de départ (le centre en bas)
    bouton.style.bottom = 'auto';
    bouton.style.transform = 'none';

    // 5. On applique les nouvelles coordonnées !
    bouton.style.left = randomX + 'px';
    bouton.style.top = randomY + 'px';
});

// (Optionnel) Si jamais quelqu'un arrive à cliquer dessus (sur téléphone par exemple)
bouton.addEventListener('click', function() {
    alert("Tricheur ! Tu as utilisé un écran tactile ? 😂");
});