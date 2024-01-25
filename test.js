function loadPlatsByCategory(categoryId) {
    $.get('data.json', function (data) {
        const platList = $('#platList');

        // Filtrer les plats par la catégorie spécifiée
      

        // Afficher les plats
        for (let i = 0; i < plats.length; i++) {
            const plat = plats[i];

            const platElem = document.createElement('div');
            platElem.className = 'col-12 col-md-6 col-lg-4 p-3';

            const img = document.createElement('img');
            img.src = plat.image;
            img.className = 'img-thumbnail';

            const p = document.createElement('p');
            p.textContent = plat.libelle + ' - Prix: ' + plat.prix + '€';

            platElem.append(img);
            platElem.append(p);
            platList.append(platElem);
        }
    });
}

// Chargement initial des plats en fonction de l'ID de la catégorie dans l'URL
const categoryId = getCategoryIdFromUrl();
if (categoryId) {
    loadPlatsByCategory(parseInt(categoryId)); // Convertir l'ID en entier
} else {
    // Gérer le cas où l'ID de la catégorie n'est pas spécifié
    console.error('ID de catégorie non spécifié dans l\'URL.');
}