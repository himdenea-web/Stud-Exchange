
const INFOS_ADMIN = {
    nom: "Himdene",
    email: "himdenea@gmail.com",
    wero: "06 10 96 64 24"
};


const catalogueFiches = [
    {
        id: 1,
        titre: "Python & Algo L1",
        vendeur: "Thomas",
        prix: "4.99",
        categorie: "info",
        lienApercu: "https://drive.google.com/..." 
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



function afficherFiches() {
    const container = document.getElementById('catalog');
    if (!container) return;
    
    container.innerHTML = ""; 

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



function commander(nomFiche, prix) {

    const sujet = encodeURIComponent(`Commande Stud'Exchange : ${nomFiche}`);
    const corps = encodeURIComponent(
        `Bonjour ${INFOS_ADMIN.nom},\n\n` +
        `Je souhaite acheter la fiche : "${nomFiche}" au prix de ${prix}€.\n\n` +
        `Je viens d'effectuer le paiement Wero au ${INFOS_ADMIN.wero}.\n\n` +
        `Merci de m'envoyer le fichier sur cet email !`
    );
    
    
    alert(
        `🚀 ÉTAPE FINALE :\n\n` +
        `1. Envoie ${prix}€ au ${INFOS_ADMIN.wero} via Wero.\n` +
        `2. Clique sur OK pour ouvrir ton mail et envoyer la preuve.`
    );
    
    
    window.location.href = `mailto:${INFOS_ADMIN.email}?subject=${sujet}&body=${corps}`;
}



function filterCategory(cat) {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
}


window.onload = afficherFiches;
