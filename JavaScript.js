//------------------------------------------------ json --------------------------//






//-----------------------CAT & PLATS ACCUEIL----------------------------//


$(document).ready(function () {
  // Charger le fichier JSON via AJAX
  $.ajax({
    url: 'data.json',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      // Appelé une fois que le fichier JSON est chargé avec succès
      var numberOfCategoriesToShow = 6; // Spécifiez le nombre de catégories à afficher
      createCategoryElements(data.categorie, numberOfCategoriesToShow);
    },
    error: function (error) {
      console.error('Erreur lors du chargement du fichier JSON :', error);
    }
  });

  // Fonction pour créer les éléments HTML à partir des données JSON
  function createCategoryElements(categories, numberOfCategoriesToShow) {
    // Limiter le nombre de catégories à afficher
    categories = categories.slice(0, numberOfCategoriesToShow);

    // Parcours du tableau et création des éléments HTML
    categories.forEach(function (categorie) {
      // Création d'une variable avec le code HTML
      var categoryHtml = `
      <div class="image-container col-12 col-sm-6 col-lg-4 mb-3">
      <a href="#" class="col-12 d-flex justify-content-center">
          <img src="${categorie.image}" alt="${categorie.libelle}" class="img-thumbnail image-hover-effect">
          <div class="image-text">${categorie.libelle}</div>
      </a>
  </div>
      `;

      // Ajout de la variable au conteneur
      $('#categories-container').append(categoryHtml);
    });
  }
});



$(document).ready(function () {
  // Charger le fichier JSON via AJAX
  $.ajax({
    url: 'data.json',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      // Appelé une fois que le fichier JSON est chargé avec succès
      var numberOfPlatsToShow = 2; // Spécifiez le nombre de plats à afficher
      createPlatElements(data.plat, numberOfPlatsToShow);
    },
    error: function (error) {
      console.error('Erreur lors du chargement du fichier JSON :', error);
    }
  });

  // Fonction pour créer les éléments HTML des plats à partir des données JSON
  function createPlatElements(plats, numberOfPlatsToShow) {
    // Limiter le nombre de plats à afficher
    plats = plats.slice(0, numberOfPlatsToShow);

    // Parcours du tableau et création des éléments HTML
    plats.forEach(function (plat) {
      // Création d'une variable avec le code HTML
      var platHtml = `
      <div class="card col-sm-8 col-10" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${plat.image}" class="img-fluid rounded-start col-12" style="height: 100%;" alt="cesar-salad">
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${plat.libelle}</h5>
            <p class="card-text">${plat.description}</p>
            <p class="card-price">${plat.prix}€</p>
            <a href="commande.html" class="btn btn-primary">Allez voir <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
          </svg> </a>
          </div>
        </div>
      </div>
    </div>
          
      `;

      // Ajout de la variable au conteneur
      $('#plats-container').append(platHtml);
    });
  }
});



//-----------------PAGE DES PLATS---------------------//


$(document).ready(function () {
  var data;
  var currentIndexPlats = 0;
  var itemsPerPagePlats = 4;

  function loadDataAndShowPlats() {
    $.ajax({
      url: 'data.json',
      type: 'GET',
      dataType: 'json',
      success: function (jsonData) {
        data = jsonData;
        showPlats();
      },
      error: function (error) {
        console.error('Erreur lors du chargement du fichier JSON :', error);
      }
    });
  }

  function showPlats() {
    $('#page-plats-container').empty();
    var platsToShow = data.plat.slice(currentIndexPlats, currentIndexPlats + itemsPerPagePlats);

    platsToShow.forEach(function (plat) {
      var platHtml = `
        <div class="card col-sm-8 col-10" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${plat.image}" class="img-fluid rounded-start col-12" style="height: 100%;" alt="${plat.libelle}">
            </div>
            <div class="col-md-8">
              <div class="card-body ">
                <h5 class="card-title">${plat.libelle}</h5>
                <p class="card-text">${plat.description}</p>
                <p class="card-price">${plat.prix}€</p>
                <a href="commande.html" class="btn btn-primary">Commander</a>
              </div>
            </div>
          </div>
        </div>
      `;
      $('#page-plats-container').append(platHtml);
    });

    updatePaginationButtonsPlats();
  }

  function updatePaginationButtonsPlats() {
    $('#precedent-btn-plats').prop('disabled', currentIndexPlats === 0);
    $('#suivant-btn-plats').prop('disabled', currentIndexPlats + itemsPerPagePlats >= data.plat.length);
  }

  function navigatePlats(offset) {
    currentIndexPlats += offset;
    if (currentIndexPlats < 0) {
      currentIndexPlats = 0;
    } else if (currentIndexPlats >= data.plat.length) {
      currentIndexPlats = data.plat.length - itemsPerPagePlats;
    }
    showPlats();
  }

  $('#precedent-btn-plats').on('click', function (event) {
    event.preventDefault();
    navigatePlats(-itemsPerPagePlats);
  });

  $('#suivant-btn-plats').on('click', function (event) {
    event.preventDefault();
    navigatePlats(itemsPerPagePlats);
  });

  // Charger le fichier JSON via AJAX et afficher les plats
  loadDataAndShowPlats();
});



//------------------------PAGE categorie-------------------------//


$(document).ready(function () {
  var data; // Variable pour stocker les données JSON
  var currentIndex = 0; // Indice actuel pour la pagination
  var itemsPerPage = 6; // Nombre d'éléments à afficher par page

  // Charger le fichier JSON via AJAX
  $.ajax({
    url: 'data.json',
    type: 'GET',
    dataType: 'json',
    success: function (jsonData) {
      // Appelé une fois que le fichier JSON est chargé avec succès
      data = jsonData;
      showCategories();
    },
    error: function (error) {
      console.error('Erreur lors du chargement du fichier JSON :', error);
    }
  });

  // Fonction pour afficher les catégories en fonction de l'indice actuel
  function showCategories() {
    // Effacer le contenu actuel
    $('#page-categories-container').empty();

    // Obtenir les catégories à afficher pour la page actuelle
    var categoriesToShow = data.categorie.slice(currentIndex, currentIndex + itemsPerPage);

    // Parcourir et créer des éléments HTML pour chaque catégorie
    categoriesToShow.forEach(function (categorie) {
      var categoryHtml = `
        <div class="image-container col-12 col-sm-6 col-lg-4 mb-3">
          <a href="#" class="col-12 d-flex justify-content-center">
            <img src="${categorie.image}" alt="${categorie.libelle}" class="img-thumbnail image-hover-effect">
            <div class="image-text">${categorie.libelle}</div>
          </a>
        </div>
      `;

      // Ajouter la catégorie au conteneur
      $('#page-categories-container').append(categoryHtml);
    });

    // Mettre à jour l'état des boutons Précédent/Suivant
    updatePaginationButtons();
  }

  // Fonction pour mettre à jour l'état des boutons Précédent/Suivant
  function updatePaginationButtons() {
    $('#precedent-btn').prop('disabled', currentIndex === 0);
    $('#suivant-btn').prop('disabled', currentIndex + itemsPerPage >= data.categorie.length);
  }

  // Gestionnaire d'événements pour le bouton Précédent
  $('#precedent-btn').on('click', function (event) {
    event.preventDefault();
    if (currentIndex > 0) {
      currentIndex -= itemsPerPage;
      showCategories();
    }
  });

  // Gestionnaire d'événements pour le bouton Suivant
  $('#suivant-btn').on('click', function (event) {
    event.preventDefault();
    if (currentIndex + itemsPerPage < data.categorie.length) {
      currentIndex += itemsPerPage;
      showCategories();
    }
  });
});











