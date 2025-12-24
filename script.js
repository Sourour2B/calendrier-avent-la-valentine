// --- CONFIGURATION ---
// ATTENTION : Le script utilise l'heure locale de l'utilisateur.

const DECEMBER = 11; // JavaScript compte les mois de 0 (Jan) à 11 (Dec)
const CURRENT_YEAR = new Date().getFullYear(); // Année actuelle (ex: 2025)

// Contenu à afficher pour chaque jour (1 à 24)
// Vous devez personnaliser les titres, descriptions et liens d'images !
const ADVENT_CONTENT = {
  1: {
    title: "Jour 1 : L'actualisation",
    text: `Les activités et événements du mois d'actualisation présents dans le dossier du DE sont automatiquement restitués à l'ouverture du formulaire.<br>Le DE doit vérifier les informations...`,
    image: "assets/contenu-1.jpg"
  },
  2: {
    title: "Jour 2 : Le paiement provisoire par avance - PPA",
    text: `Un paiement provisoire par avance peut être versé à un allocataire qui ne fournit pas les justificatifs concernant son activité reprise lors de son actualisation...`,
    image: "assets/contenu-1.jpg"
  },
  3: {
    title: "Jour 3 : Réinscription suite à expiration du titre de séjour",
    text: `Le Demandeur d’emploi présente à l’accueil son titre de séjour après cessation d’inscription au motif d’échéance du précédent titre...`,
    image: "assets/contenu-1.jpg"
  },
  4: {
    title: "Jour 4 : Les Carences",
    text: `🦌 Délai d'attente réglementaire : 7 jours, appliqué à tous, sauf si déjà appliqué dans les 12 derniers mois.<br><br>🎅 Différé Indemnités Congés Payés : ...`,
    image: "assets/contenu-1.jpg"
  },
  5: {
    title: "Jour 5 : Délai de traitement",
    text: `🎁 CVM : 48h à 72h ouvrés.<br><br>🍪 Réclamation: 7 jours.<br><br>🔔 Demande d’allocation: 21 jours ouvrés.<br><br>❄️Après dépôt de documents : 10 jours`,
    image: "assets/contenu-1.jpg"
  },
  6: {
    title: "Jour 6 : Choix du dispositif pour les créateurs",
    text: `Lorsque le DE démarre ou a démarré une ANS, il a le choix entre : Maintien des droits ou autres dispositifs selon sa situation...`,
    image: "assets/contenu-1.jpg"
  },
  7: {
    title: "Jour 7 : Quand le dossier ASS est mis à disposition du DE ?",
    text: `Le dossier ASS est créé automatiquement dans l’espace personnel du DE. Il est disponible 30 jours avant la fin des droits et 60 jours après le dernier jour indemnisé...`,
    image: "assets/contenu-1.jpg"
  },
  8: {
    title: "Jour 8 : L'attestation employeur des particuliers employeurs",
    text: `Qui est concerné par l’attestation employeur pour les particuliers employeurs ? Tous les particuliers employeurs qui se séparent de leur salarié lors d’une fin de contrat...`,
    image: "assets/contenu-1.jpg"
  },
  9: {
    title: "Jour 9 : Complément d’allocation en cas de reprise d’activité salariée",
    text: `Le DE doit maintenir son inscription comme demandeur d’emploi et déclarer son ou ses emplois, chaque mois dans le cadre de son actualisation...`,
    image: "assets/contenu-1.jpg"
  },
  10: {
    title: "Jour 10 : Complément d’allocation pour activité non salariée",
    text: `Le complément d'allocation est calculé ainsi : Montant de l’allocation mensuelle – 70% des rémunérations déclarées...`,
    image: "assets/contenu-1.jpg"
  },
  11: {
    title: "Jour 11 : Le DE rentre en France après travail dans un État européen",
    text: `Le DE doit demander le document portable U1 à l’institution compétente de votre ancien État d’emploi. Ce formulaire récapitule les périodes d'assurance ou d'emploi...`,
    image: "assets/contenu-1.jpg"
  },
  12: {
    title: "Jour 12 : Condition d'âge et justificatif pour départ à la retraite",
    text: `L'indemnisation en ARE, ASS, ASP cesse dès que le demandeur d'emploi : atteint l'âge minimum légal pour la retraite ET justifie du nombre de trimestres requis...`,
    image: "assets/contenu-1.jpg"
  },
  13: {
    title: "Jour 13 : Maintien des droits jusqu’à la retraite",
    text: `Pour le maintien des droits jusqu’à la retraite, les justificatifs recevables sont listés : ...`,
    image: "assets/contenu-1.jpg"
  },
  14: {
    title: "Jour 14 : Qu’est-ce que l’instance paritaire régionale (IPR) ?",
    text: `Les Instances Paritaires Régionales (IPR) ont été créées par la loi du 13 février 2008...`,
    image: "assets/contenu-1.jpg"
  },
  15: {
    title: "Jour 15 : Pension d’invalidité règle de cumul",
    text: `La pension d’invalidité de catégorie 1 est entièrement cumulable avec l’ARE. Les catégories 2 et 3 le sont sous conditions...`,
    image: "assets/contenu-1.jpg"
  },
  16: {
    title: "Jour 16 : Modalité d’attribution de l’aide fin de droit",
    text: `Pour les rejets ASS autres que ressources prononcées à compter du 1er avril 2025, l’aide est versée automatiquement...`,
    image: "assets/contenu-1.jpg"
  },
  17: {
    title: "Jour 17 : Rappel réglementaire aide aux congés non payés",
    text: `Le salarié qui a bénéficié de l'allocation d'assurance chômage pendant la période de référence des congés payés...`,
    image: "assets/contenu-1.jpg"
  },
  18: {
    title: "Jour 18 : Le DE n’est pas payé, que vérifier ?",
    text: `Les raisons sont multiples : erreurs bancaires, pièces manquantes, rejet administratif... Vérifiez les éléments du dossier et les notifications envoyées au DE.`,
    image: "assets/contenu-1.jpg"
  },
  19: {
    title: "Jour 19 : Attestation employeur – Absence d’AE",
    text: `En cas d’absence de la dernière attestation employeur ou d'une attestation non conforme, il convient de saisir l'IP France Travail...`,
    image: "assets/contenu-1.jpg"
  },
  20: {
    title: "Jour 20 : Le délai de forclusion : Article 791er du RG",
    text: `Le bénéfice de l’ARE est conditionné à la justification d’une fin de contrat de travail dans un délai de 12 mois appelé délai de forclusion...`,
    image: "assets/contenu-1.jpg"
  },
  21: {
    title: "Jour 21 : Déterminer la période de référence affiliation (PRA)",
    text: `La période de référence affiliation est la période durant laquelle France Travail recherche la condition d’affiliation minimale...`,
    image: "assets/contenu-1.jpg"
  },
  22: {
    title: "Jour 22 : Le droit d’option",
    text: `Le droit d’option est ouvert aux DE ayant un reliquat de droit ARE non déchu et qui remplissent à nouveau les conditions d’ouverture de droit...`,
    image: "assets/contenu-1.jpg"
  },
  23: {
    title: "Jour 23 : Trouver le bon simulateur ou la bonne information",
    text: `Ce point d’entrée unique guide les utilisateurs vers le bon outil pour estimer et connaître leurs droits à l'indemnisation...`,
    image: "assets/contenu-1.jpg"
  },
  24: {
    title: "Jour 24 : Joyeux Réveillon !",
    text: `Voici un cadeau spécial : 🎁<br><br>
           <a href="https://www.youtube.com/watch?v=I0dzWSb1hgo" target="_blank" style="color: #ff0000; font-weight: bold; text-decoration: underline;">
           Cliquez ici pour la surprise musicale</a>`,
    image: "assets/contenu-1.jpg"
  }
};
// --- FIN CONFIGURATION ---

document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Déterminer si nous sommes en Décembre de l'année configurée
  const isDecember = currentMonth === DECEMBER && currentYear === CURRENT_YEAR;

  const days = document.querySelectorAll(".day");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-body");
  const closeModal = document.getElementById("close-modal");

  // Vérifications pour éviter les erreurs si le HTML ne contient pas les éléments attendus
  if (!days || days.length === 0) {
    console.warn("Aucune case '.day' trouvée dans le DOM.");
    return;
  }
  if (!modalOverlay || !modalBody) {
    console.warn("Éléments de la modale manquants (modal-overlay ou modal-body).");
    return;
  }

  // 1. Gérer le déblocage des cases au chargement
  days.forEach(day => {
    const raw = day.getAttribute("data-day");
    const dayNumber = parseInt(raw, 10);

    // Ignore les cases sans nombre valide
    if (Number.isNaN(dayNumber)) {
      return;
    }

    // Limiter aux jours 1..24
    if (dayNumber < 1 || dayNumber > 24) {
      // si vous avez des jours hors 1-24, vous pouvez les masquer ici
      return;
    }

    // Seuls les jours passés et le jour J peuvent être ouverts, et uniquement en Décembre
    if (isDecember && dayNumber <= currentDay) {
      day.classList.add("unlocked");
      // si la case n'a pas de contenu, afficher le numéro
      if (!day.innerHTML.trim()) day.textContent = dayNumber;
    } else {
      // Astuce : afficher le numéro pour les jours bloqués (si aucune image de porte n'est mise)
      day.textContent = dayNumber;
    }

    // 2. Écouter le clic sur les cases
    day.addEventListener("click", () => {
      if (day.classList.contains("unlocked")) {
        // Animation d'ouverture (si définie en CSS)
        day.classList.add("open");

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
      // Utiliser innerHTML car le contenu inclut du HTML (br, a, etc.)
      modalBody.innerHTML = `
        <h2>${escapeHtml(content.title)}</h2>
        ${content.image ? `<img src="${escapeAttr(content.image)}" alt="Contenu du jour ${dayNumber}">` : ""}
        <div class="advent-text">${content.text}</div>
      `;
    }

    modalOverlay.classList.remove("hidden");
    // focus pour accessibilité
    modalOverlay.setAttribute("tabindex", "-1");
    modalOverlay.focus();
  }

  // 4. Fermer la modale
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modalOverlay.classList.add("hidden");
    });
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.add("hidden");
    }
  });

  // Fermer avec la touche Échap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalOverlay.classList.contains("hidden")) {
      modalOverlay.classList.add("hidden");
    }
  });

  // petites fonctions utilitaires pour éviter les injections par erreur
  function escapeHtml(unsafe) {
    if (!unsafe && unsafe !== 0) return "";
    return String(unsafe)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  function escapeAttr(unsafe) {
    if (!unsafe && unsafe !== 0) return "";
    return String(unsafe)
      .replace(/"/g, "%22")
      .replace(/'/g, "%27");
  }
});
