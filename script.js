// ==========================================
// 1. CONFIGURATION 
// ==========================================

// Date de votre rencontre ou officialisation
// Format : Année, Mois (0 = Janvier, 11 = Décembre), Jour
const dateDebut = new Date(2025, 8, 29); 
// Exemple ci-dessus : 25 Décembre 2022. 
// Si c'est le 14 Février 2023, mets : (2023, 1, 14)

// ==========================================
// 2. LE COMPTEUR D'AMOUR
// ==========================================
function updateTimer() {
    const maintenant = new Date();
    const difference = maintenant - dateDebut;

    // Calculs mathématiques pour convertir en jours, heures, etc.
    const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
    const heures = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const secondes = Math.floor((difference / 1000) % 60);

    // Affichage dans le HTML
    const timerElement = document.getElementById("chrono");
    timerElement.innerHTML = 
        `${jours} Jours, ${heures} H <br> ${minutes} Min ${secondes} Sec`;
}

// Met à jour le compteur toutes les secondes (1000 millisecondes)
setInterval(updateTimer, 1000);

// ==========================================
// 3. LA FONCTION SURPRISE (BOUTON)
// ==========================================
function revealMessage() {
    const message = document.getElementById("messageSecret");
    const bouton = document.querySelector(".btn-surprise");

    // Affiche le message
    message.style.display = "block";
    
    // Cache le bouton après le clic
    bouton.style.display = "none";
}

// ==========================================
//  EFFET DE NEIGE 
// ==========================================
function createSnowflake() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    
    // Pour mettre des flocons
    snow.innerHTML = "❄"; 

    // Position horizontale aléatoire (de 0 à 100vw)
    snow.style.left = Math.random() * 100 + "vw";
    
    // Taille aléatoire
    snow.style.fontSize = Math.random() * 20 + 10 + "px";
    
    // Vitesse de chute aléatoire (entre 3s et 8s)
    snow.style.animationDuration = Math.random() * 5 + 3 + "s";
    
    // Transparence aléatoire
    snow.style.opacity = Math.random();

    document.body.appendChild(snow);

    // Supprime le flocon après 8 secondes pour ne pas ralentir l'ordi
    setTimeout(() => {
        snow.remove();
    }, 8000);
}

// Créer un flocon tous les 200 millisecondes
setInterval(createSnowflake, 200);