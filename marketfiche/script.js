// ==========================================
// 1. TES INFORMATIONS (ADMIN)
// ==========================================
const INFOS_ADMIN = {
    nom: "Himdene",
    email: "himdenea@gmail.com",
    wero: "06 10 96 64 24"
};

// ==========================================
// 2. TA BASE DE DONNÉES MANUELLE
// ==========================================
// Pour ajouter un vendeur, copie un bloc { ... } et change les infos
const catalogueFiches = [
    {
        id: 1,
        titre: "Python & Algo L1",
        vendeur: "Thomas",
        prix: "4.99",
        categorie: "info",
        lienApercu: "https://drive.google.com/..." // Remplace par ton lien Drive
    },
    {
        id: 2,
        titre: "Droit Civil Intro",
        vendeur: "Sarah",
        prix: "5.50",
        categorie: "droit",
        lienApercu: "https://drive.google.com/..."
    },
    {
        id: 3,
        titre: "Macroéconomie S2",
        vendeur: "Amine",
        prix: "3.99",
        categorie: "eco",
        lienApercu: "https://drive.google.com/..."
    }
];

// ==========================================
// 3. FONCTIONS D'AFFICHAGE
// ==========================================

function afficherFiches() {
    const container = document.getElementById('catalog');
    if (!container) return;
    
    container.innerHTML = ""; // On vide avant d'afficher

    catalogueFiches.forEach(fiche => {
        container.innerHTML += `
            <div class="product-card" data-category="${fiche.categorie}">
                <div class="badge">${fiche.categorie.toUpperCase()}</div>
                <h4>${fiche.titre}</h4>
                <p class="seller">Par ${fiche.vendeur}</p>
                <div class="price">${fiche.prix} €</div>
                <a href="${fiche.lienApercu}" target="_blank" class="btn-preview">Aperçu rapide 👀</a>
                <button onclick="commander('${fiche.titre.replace(/'/g, "\\'")}', '${fiche.prix}')" class="btn-buy">
                    Acheter via Wero ⚡
                </button>
            </div>
        `;
    });
}

// ==========================================
// 4. GESTION DE LA COMMANDE
// ==========================================

function commander(nomFiche, prix) {
    // Préparation des textes pour le mail
    const sujet = encodeURIComponent(`Commande Stud'Exchange : ${nomFiche}`);
    const corps = encodeURIComponent(
        `Bonjour ${INFOS_ADMIN.nom},\n\n` +
        `Je souhaite acheter la fiche : "${nomFiche}" au prix de ${prix}€.\n\n` +
        `Je viens d'effectuer le paiement Wero au ${INFOS_ADMIN.wero}.\n\n` +
        `Merci de m'envoyer le fichier sur cet email !`
    );
    
    // Alerte pour guider l'utilisateur
    alert(
        `🚀 ÉTAPE FINALE :\n\n` +
        `1. Envoie ${prix}€ au ${INFOS_ADMIN.wero} via Wero.\n` +
        `2. Clique sur OK pour ouvrir ton mail et envoyer la preuve.`
    );
    
    // Ouverture du logiciel de mail (Gmail, Outlook...)
    window.location.href = `mailto:${INFOS_ADMIN.email}?subject=${sujet}&body=${corps}`;
}

// ==========================================
// 5. SYSTÈME DE FILTRES
// ==========================================

function filterCategory(cat) {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Gérer l'apparence des boutons de filtre
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // On ajoute 'active' au bouton cliqué
    event.target.classList.add('active');
}

// Lancement automatique au chargement de la page
window.onload = afficherFiches;