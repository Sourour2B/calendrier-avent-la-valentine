// --- CONFIGURATION ---
// ATTENTION : Le script utilise l'heure locale de l'utilisateur.

const DECEMBER= 10; // JavaScript compte les mois de 0 (Jan) à 11 (Dec)
const CURRENT_YEAR = new Date().getFullYear(); // Année actuelle (ex: 2025)


// Contenu à afficher pour chaque jour (1 à 24)
// Vous devez personnaliser les titres, descriptions et liens d'images !
const ADVENT_CONTENT = {
    1: { 
        title: "Jour 1 : L'actualisation ", 
        text: "Les activités et événements du mois d'actualisation présents dans le dossier du DE sont automatiquement restitués à l'ouverture du formulaire.<br>Le DE doit vérifier les informations pré-remplies identifiées par le tag « [activité ou un événement] connu de France Travail », et selon la couleur :<br><br>- Fond vert : il peut uniquement modifier/supprimer une DPAE. Il a la possibilité de renseigner les infos signalées « à compléter » (facultatif)<br> - Fond violet + tag « A compléter » : il doit saisir les informations obligatoires manquantes pour pouvoir valider son formulaire.<br><br>LA CERTIFICATION DU NIR , il est important d’avoir des NIR certifiés afin de récupérer des informations provenant d’autres organismes via transmission de flux. Cela permet d'avoir le maximum d’informations dans les dossiers DE et donc d’optimiser le pré-remplissage. ",
        image: "assets/contenu-1.jpg" 
    },
    2: { 
        title: "Jour 2 : Le paiement provisoire par acance (PPA) ", 
        text: "un paiement provisoire par avance (PPA) peut être versé à un allocataire qui ne fournit pas les justificatifs concernant son activité reprise lors de son actualisation.<br>Pour avoir droit au PPA, plusieurs critères sont requis :<br>• être éligible au PPA <br>• être toujours à la recherche d’un emploi<br>• déclarer les montants des rémunérations issues de la reprise d’activité en l’absence des justificatifs<br><br>Ne sont pas éligibles au paiement provisoire :<br><br> • contrat aidé <br>• bénéficiaire saisie arrêt/pension alimentaire <br>• bénéficiaire acompte non soldé <br>• allocation hors RAC<br>• exclusion individuelle - MATA <br>• en cours activité conservée <br>• Ouverture de Droit ARE au titre d’une convention de gestion
 
 ",
        image: "assets/contenu-1.jpg" 
    },
    3: { 
        title: "Jour 3 : ACTU ", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    // ... AJOUTEZ LE CONTENU POUR LES JOURS 4 À 24 ...
    4: { 
        title: "Jour 4 : ACTU ", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    5: { 
        title: "Jour 5 : ACTU ", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    6: { 
        title: "Jour 6 : ACTU s", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    7: { 
        title: "Jour 7 : ACTU ", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    8: { 
        title: "Jour 8 : ACTU ", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    9: { 
        title: "Jour 9 : ACTU ", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    10: { 
        title: "Jour 10 : ACTU ", 
         text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    11: { 
        title: "Jour 11 : ACTU ", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    12: { 
        title: "Jour 12 : ACTU ", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    13: { 
        title: "Jour 13 : ACTU ", 
         text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    14: { 
        title: "Jour 14 : ACTU ", 
         text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    15: { 
        title: "Jour 15 : ACTU ", 
         text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    16: { 
        title: "Jour 16 : ACTU ", 
         text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    17: { 
        title: "Jour 17 : ACTU ", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    18: { 
        title: "Jour 18 : ACTU ", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    19: { 
        title: "Jour 19 : ACTU ", 
         text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    20: { 
        title: "Jour 20 : ACTU ", 
         text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    21: { 
        title: "Jour 21 : ACTU ", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    22: { 
        title: "Jour 22 : ACTU ", 
         text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    23: { 
        title: "Jour 23 : ACTU ", 
        text: "C'est parti ! ",
        image: "assets/contenu-1.jpg" 
    },
    24: { 
        title: "Jour 24 : Joyeux Réveillon !", 
        text: "Joyeux Réveillon ! Voici un cadeau spécial : 🎁 ",
        image: "assets/contenu-1.jpg" 
    },
};
// --- FIN CONFIGURATION ---


document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Déterminer si nous sommes en Décembre de l'année configurée
    const isDecember = (currentMonth === DECEMBER&& currentYear === CURRENT_YEAR);

    const days = document.querySelectorAll('.day');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');

    // 1. Gérer le déblocage des cases au chargement
    days.forEach(day => {
        const dayNumber = parseInt(day.getAttribute('data-day'));

        // Seuls les jours passés et le jour J peuvent être ouverts, et uniquement en Décembre
        if (isDecember && dayNumber <= currentDay) {
            day.classList.add('unlocked');
        } else {
             // Astuce : afficher le numéro pour les jours bloqués (si aucune image de porte n'est mise)
             day.innerHTML = dayNumber;
        }

        // 2. Écouter le clic sur les cases débloquées
        day.addEventListener('click', () => {
            if (day.classList.contains('unlocked')) {
                // Animation d'ouverture
                day.classList.add('open'); 
                
                // Afficher le contenu
                showModalContent(dayNumber);
            } else {
                alert("Patience ! Ce cadeau sera débloqué le " + dayNumber + " décembre.");
            }
        });
    });

    // 3. Fonction pour afficher la fenêtre modale
    function showModalContent(dayNumber) {
        const content = ADVENT_CONTENT[dayNumber];
        
        if (!content) {
            modalBody.innerHTML = `<h2>Jour ${dayNumber}</h2><p>Le contenu de ce jour est manquant. Revenez plus tard !</p>`;
        } else {
            modalBody.innerHTML = `
                <h2>${content.title}</h2>
                <img src="${content.image}" alt="Contenu du jour ${dayNumber}">
                <p>${content.text}</p>
            `;
        }

        modalOverlay.classList.remove('hidden');
    }

    // 4. Fermer la modale
    closeModal.addEventListener('click', () => {
        modalOverlay.classList.add('hidden');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.add('hidden');
        }
    });

});





