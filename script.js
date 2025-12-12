// --- CONFIGURATION ---
// ATTENTION : Le script utilise l'heure locale de l'utilisateur.


const DECEMBER= 11; // JavaScript compte les mois de 0 (Jan) à 11 (Dec)
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
        title: "Jour 2 : Le paiement provisoire par avance -  PPA ", 
        text: "un paiement provisoire par avance peut être versé à un allocataire qui ne fournit pas les justificatifs concernant son activité reprise lors de son actualisation.<br>Pour avoir droit au PPA, plusieurs critères sont requis :<br>• être éligible au PPA <br>• être toujours à la recherche d’un emploi<br>• déclarer les montants des rémunérations issues de la reprise d’activité en l’absence des justificatifs<br><br>Ne sont pas éligibles au paiement provisoire :<br><br> • contrat aidé <br>• bénéficiaire saisie arrêt ou pension alimentaire <br>• bénéficiaire acompte non soldé <br>• allocation hors RAC<br>• exclusion individuelle - MATA <br>• en cours activité conservée <br>• Ouverture de Droit ARE au titre d’une convention de gestion.<br><br>Le PPA représente 80% de ce qui devrait être payé sur la base des informations transmises par l’allocataire. Son paiement s’effectue au plus tôt de l’actualisation, au moment du paiement principal cette avance fera l’objet d’une régularisation dès la prochaine mise en paiement, qu’elle concerne le mois en question ,lors de la communication des justificatifs manquants, ou une autre période, antérieure ou postérieure au PPA.<br> L’avance peut ainsi être récupérée sur tous les paiements à venir - ARE, AREF, ARCE, ASP et ASP ARE-.",
        image: "assets/contenu-1.jpg" 
    },
    3: { 
        title: "Jour 3 : Réinscription suite à expiration du titre de séjour ", 
        text: "Le Demandeur d’emploi présente à l’accueil son titre de séjour après cessation d’inscription au motif d’échéance du précédent titre.<br> Après avoir consulté les modalités de vérification des titres de séjour et autorisation de travail. (voir tableau récapitulatif des titres de séjour permettant l’inscription) <br><br> Il convient :<br> ➢de le réinscrire dans un délai de 30 jours calendaires suivant la date d’expiration du titre, <br><br>➢ S’assurer de lui faire compléter le document d’actualisation pour le mois à rattraper afin de connaitre le(s) événement(s) survenu(s) pendant cette interruption, <br><br>➢ Au-delà de 30 jours, renvoyer le DE vers le script d’inscription sur FT.fr avec une possibilité de demande d’inscription rétroactive (voir Saisie des inscriptions rétroactives)",
        image: "assets/contenu-1.jpg" 
    },
    
    4: { 
        title: "Jour 4 : Les Carences  ", 
        text: " 🦌 Délai d'attente réglementaire : 7 jours , appliqué à tous, sauf si déjà appliqué dans les 12 derniers mois<br><br>🎅 Différé Indemnités Congés Payés : Si le DE touche une indemnité de congés payés à la fin de votre contrat, l'indemnisation est reportée, Max 30 jours<br><br>❄️ Différé Supra-légal : Si le DE touche une indemnité de rupture,  licenciement, rupture conv. supérieure au minimum légal, un différé supplémentaire s'applique , Max 150 jours, ou 75 jours si licenciement économique.",
        image: "assets/contenu-1.jpg" 
    },
    5: { 
        title: "Jour 5 : Délai de traitement ", 
        text: "🎁 CVM : 48h à 72h  ouvrés.<br><br>🍪 Réclamation: 7 jours.<br><br>🔔 Demande d’allocation:  21 jours ouvrés.<br><br> ❄️Après dépot de documents : 10 jours",
        image: "assets/contenu-1.jpg" 
    },
    6: { 
        title: "Jour 6 : Choix du dispositif pour les créateurs", 
        text: "Lorsque le DE démarre ou a démarré une ANS , il a le choix entre :<br><br> 🎅 Un Maintien des droits : un décalage des droits est effectué en tenant compte des rémunérations.<br><br>🦌 Une Aide à la Reprise ou la Création d’Entreprise (ARCE) : une aide de 60 % (45 % pour les FCT < 1er juillet 2023 ou OD A8/A10) du capital restant à la date de création, versée en 2 fois (avec un écart de 6 mois entre les versements).<br><br> Quel que soit le dispositif dans lequel le DE sera, ne pas oublier de tracer les contacts afin de suivre l’avancement du dossier.<br><br><br> En ASS : Un cumul intégral est possible pendant 3 mois et au-delà en l’absence de rémunération. En cas d’obtention de l’ACRE, le cumul est intégral jusqu’à 12 mois au-delà en l’absence de rémunération.",
        image: "assets/contenu-1.jpg" 
    },
    7: { 
        title: "Jour 7 : Quand le dossier ASS est mis à disposition du DE ? ", 
        text: "Le dossier  ASS est créée automatiquement dans l’espace personnel du DE.<br>Il est disponible 30 jours avant la fin des droits et 60 jours après le dernier jour indemnisé.<br><br>Le dossier ASS manuel est créé dans le cas où le DE se manifeste tardivement( au-delà des 60 jours),le demandeur doit signer la demande papier. ",
        image: "assets/contenu-1.jpg" 
    },
    8: { 
        title: "Jour 8 : L'attestation employeur des particuliers employeurs  ", 
        text: "  🎅 Qui est concerné par l’attestation employeur pour les particuliers employeurs ?<br>Tous les particuliers employeurs qui se sépare de son salarié lors d’une fin de contrat de travail.<br><br>❄️ Les parents employeurs ( garde d’enfants ) adhérents à Pajemploi, ils doivent passer obligatoirement par le site pajemploi.urssaf.fr et réaliser les démarches de fin de contrat directement depuis le site comme estimer le coût d’une fin de contrat et générer les documents obligatoires à remettre au salarié.<br><br>🦌Pour un particulier employeur décédé, les personnes habilitées à réaliser les démarches sont :<br>• Le conjoint,<br>• Les parents,<br>• Les enfants, petits-enfants,<br>• Le notaire,<br><br>• La justification de la parenté, se fait par :<br>La présentation de la CNI de la personne décédée et de celle effectuant les démarches,<br>• Le livret de famille ou l’extrait de l’acte de naissance attestant de la filiation avec la personne décédée ou pour le conjoint non marié, le certificat de concubinage ou pacs.",
        image: "assets/contenu-1.jpg" 
    },
    9: { 
        title: "Jour 9 : Comment bénéficier du complément d’allocation en cas de reprise d’activité salariée ? ", 
        text: "Le DE doit maintenir son inscription comme demandeur d’emploi et déclarer son ou ses emplois, chaque mois dans le cadre de son actualisation, entre le 28 (le 26 pour le mois de février) et le 15 du mois suivant.<br><br>Ce qu’il doit déclarer lors de l’actualisation mensuelle ?<br><br><br>🦌 Le nombre d’heures travaillées dans le mois : quelle que soit la durée travaillée dans le mois, il doit indiquer les heures travaillées dans le mois, emploi par emploi (sans les minutes)<br><br>🦌 Le montant de ses salaires bruts réels ou estimés pour chaque emploi, sans les centimes :<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Il doit indiquer le salaire brut, mais aussi les indemnités de congés payés, les primes éventuelles et les avantages en nature (ex : téléphone, voiture de fonction) qui sont soumis à contribution d’assurance chômage de la part de l'employeur<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Il ne doit pas indiquer les indemnités de fin de contrat (attribuées en fin de CDD ou en fin de mission par exemple)!<br><br><br>🦌 Le calcul du montant mensuel de l’allocation sera le suivant :<br>70 % du salaire brut mensuel sont déduits du montant de votre ARE pour un mois<br>A noter : le cumul de l'allocations et du  salaire ne peut pas dépasser la moyenne des  anciens salaires qui ont servi au calcul de l'ARE.",
        image: "assets/contenu-1.jpg" 
    },
    10: { 
        title: "Jour 10 : Qu’est-ce que le complément d’allocation en cas de reprise d’activité non salariée ? ", 
         text: "Le complément d'allocation dans ce cas est calculé de la façon suivante : <br><br> 🎁 Montant de l’allocation mensuelle – 70% des rémunérations déclarées par le demandeur d’emploi.<br><br>Le cumul du revenu issu de l’activité reprise avec l’allocation ne pourra pas être supérieur au salaire de référence qui a servi au calcul du droit à l'allocation chômage.<br><br><br>A noter que si le droit à l’ARE est ouvert à la suite d’une perte d’emploi à partir du 1er avril 2025 : ce complément est possible dans la limite de 60% des droits restants au démarrage effectif de l’activité. Quand cette limite est atteinte, sous certaines conditions, le demandeur d’emploi peut solliciter la poursuite du versement jusqu’à épuisement de son droit ARE.",
        image: "assets/contenu-1.jpg" 
    },
    11: { 
        title: "Jour 11 : Le DE rentre en France après avoir travaillé dans un État européen ", 
        text: "🔔 Le De doit demander le document portable U1 à l’institution compétente de votre ancien État d’emploi. Ce formulaire récapitule les périodes d'assurance ou d'emploi accomplies sur le territoire d'un État membre de l’Union européenne, de l’Espace économique européen ou de la Suisse. Il permet la prise en compte de ces périodes afin de faire valoir les droits au titre du chômage.<br><br>❄️ Il doit s’inscrire comme demandeur d’emploi lorsqu’il rentre en France après avoir perdu son emploi occupé dans l’autre État membre.<br><br>🦌 La durée de ses droits : France Travail prend en compte les périodes de travail accomplies à l'étranger indiquées sur ce formulaire, à condition que le DE ait travaillé en France après cette activité étrangère.<br><br>🍪 Le calcul de l’allocation : Les règlements européens prévoient une particularité concernant les salaires retenus pour le calcul de l'allocation. Le montant de l’allocation versée par France Travail est établi sur la base des seules rémunérations perçues en France, après avoir occupé un emploi au sein d’un État membre. Les rémunérations perçues au titre d’une activité exercée dans l’autre État européen ne sont donc pas prises en compte pour le calcul du montant de l’allocation.",
        image: "assets/contenu-1.jpg" 
    },
    12: { 
        title: "Jour 12 : Règle relative à la condition d'âge et justificatif pour le départ à la retraite ", 
        text: "L'indemnisation en ARE, ASS, ASP.cesse dès que le demandeur d'emploi:<br><br>🎅 atteint l'âge minimum légal pour la retraite ET justifie du nombre de trimestres requis tous régimes confondus en FRANCE (régime général, régime des fonctionnaires, régimes spéciaux ) pour percevoir une pension de vieillesse à taux plein<br><br>OU<br><br>🎅 atteint 67 ans, âge auquel le taux plein est attribué d'office<br><br>OU<br><br>🎅bénéficie d'une retraite anticipée à taux plein (c'est-à-dire liquidée avant l'âge légal). Elle peut être attribuée au titre de :<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• de la pénibilité/du compte professionnel de prévention <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• d'une carrière longue <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• de travailleur handicapé <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• d'une incapacité permanente résultant d'une maladie professionnelle ou d'un accident du travail <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• de travailleur victime de I'amiante <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• de l'inaptitude au travail ou d'une incapacité permanente à compter du 1er septembre 2023 <br><br><br>Justificatifs recevables<br><br>Pour déterminer si un demandeur d'emploi peut être indemnisé ou si son allocation peut continuer de lui être versée au-delà de l'âge légal de départ à la retraite, il est essentiel pour France Travail de connaître le nombre de trimestres qu'il a acquis.Pour cela, I ‘un de ces documents doit obligatoirement être fourni :<br>* Ie courrier < Chômage indemnisé : régularisation de carrière ><br>* le courrier < Chômage indemnisé : Régul de carrière > (délivré par la MSA)<br>* le document < Calcul de votre retraite annexé à la notification de retraite<br>* le document < Convention Cnav/Unedic : avis de décision > (ancien document encore parfois utilisé par les caisses de retraite) - uniquement s'il s'agit d'un rejet<br>* le document < Reconstitution de carrière Convention ETAT/CNAV/UNEDIC > (ancien document encore parfois utilisé par les caisses de retraite)",
        image: "assets/contenu-1.jpg" 
    },
    13: { 
        title: "Jour 13 : Maintien des droits jusqu’à la retraite ", 
         text: "Pour le Maintien des droits jusqu’à la retraite, les seuls justificatifs recevables par France travail pour justifier de la condition des 100 trimestres sont les documents suivants:<br>❄️ le courrier délivré par la caisse de retraite intitulé 'chômage indemnisé : régularisation de carrière'<br>❄️le courrier de la Mutualité Sociale Agricole (MSA) dont I ‘objet est 'Rejet Pôle Emploi'  ou  'Chômage indemnisé : Régul de carrière'<br><br>Le relevé de carrière ne doit pas être utilisé pour renseigner la rubrique  'Nombre de trimestres France Travail ' afin de valider ou pas la condition des 100 trimestres . I| faut impérativement attendre que le DE nous fournisse un des documents recevables.<br><br>NB: Dans le cas où la fin du droit ARE intervient entre 62 ans et l'âge minimum légal de départ à la retraite (62 ans et 6 mois pour une personne née en 1962) et qu'un maintien ARE est possible, en |'absence du document 'chômage indemnisé : régularisation de carrière', il convient de transmettre une demande via c'zam au pôle indemnisation (afin d'éviter une rupture de paiement",
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


































