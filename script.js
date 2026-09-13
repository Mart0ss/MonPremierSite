// 1. On pointe vers les éléments du HTML qu'on veut manipuler
const bouton = document.getElementById('monBouton');
const titre = document.querySelector('h1');

// 2. On ajoute un "écouteur d'événement" sur le bouton (on écoute le "clic")
bouton.addEventListener('click', function() {
    
    // Tout ce qui est ici s'exécute uniquement quand on clique !
    
    // On change le texte et la couleur du gros titre
    titre.innerText = "Bravo ! Le JavaScript fonctionne ! 🚀";
    titre.style.color = "#e74c3c"; // Devient rouge
    
    // On change le texte et la couleur du bouton
    bouton.innerText = "Mission accomplie";
    bouton.style.backgroundColor = "#2ecc71"; // Devient vert
});