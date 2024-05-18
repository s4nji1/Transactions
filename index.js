document.addEventListener('DOMContentLoaded', function() {
    let produitSelect = document.getElementById('produit');
    let nouveauProduitInput = document.getElementById('nouveauProduit');
    let prixInput = document.getElementById('prix');
    let quantiteInput = document.getElementById('quantite');
    let ajouterProduitBtn = document.getElementById('ajouterProduit');
    let ajouterTransactionBtn = document.getElementById('ajouterTransaction');
    let tableauTransactions = document.getElementById('tableauTransactions');
    let totalPrixSpan = document.getElementById('totalPrix');
    let nombreTransactionsSpan = document.getElementById('nombreTransactions');
    let totalPrix = 0;
    let nombreTransactions = 0;

    ajouterProduitBtn.addEventListener('click', function() {
        let nouveauProduit = nouveauProduitInput.value;
        if (nouveauProduit.trim() !== '') {
            let option = document.createElement('option');
            option.textContent = nouveauProduit;
            produitSelect.appendChild(option);
            nouveauProduitInput.value = '';
        }
    });

    ajouterTransactionBtn.addEventListener('click', function() {
        let produit = produitSelect.value;
        let prix = parseFloat(prixInput.value);
        let quantite = parseInt(quantiteInput.value);
        if (produit.trim() !== '' && !isNaN(prix) && !isNaN(quantite)) {
            let total = prix * quantite;
            let newRow = tableauTransactions.insertRow();
            let produitCell = newRow.insertCell();
            let prixCell = newRow.insertCell();
            let quantiteCell = newRow.insertCell();
            let totalCell = newRow.insertCell();
            produitCell.textContent = produit;
            prixCell.textContent = prix.toFixed(2);
            quantiteCell.textContent = quantite;
            totalCell.textContent = total.toFixed(2);
            totalPrix += total;
            nombreTransactions++;
            totalPrixSpan.textContent = totalPrix.toFixed(2);
            nombreTransactionsSpan.textContent = nombreTransactions;
            prixInput.value = '';
            quantiteInput.value = '';
        }
    });
});
