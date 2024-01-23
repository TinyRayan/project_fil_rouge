//------------------------------------------------ json --------------------------//






//-----------------------CAT & PLATS ACCUEIL----------------------------//





$.get('data.json' ,function (data){
    
  const catindex= $('#catindex')
  for(i=0 ; i<6 ;i++){
      const elem = document.createElement('div')
      elem.className= 'col-12 col-sm-6 col-lg-4 p-0 d-flex justify-content-center p-0 m-0'
     
      
      

      const img =document.createElement('img')
      img.src =data.categorie[i].image
      img.className='img-thumbnail  mt-3 image-hover-effect'
      
      const lien =document.createElement('a')
      lien.href = "categorie.html"
      lien.className='image-container'
      lien.append(img)
      
      const p = document.createElement('p')
      p.className='image-text'
      p.textContent=data.categorie[i].libelle

     

      lien.appendChild(img);
      catindex.append(elem)
      elem.append(lien)
      lien.append(p)
      
  }
  



  const platindex = $('#platindex');

  for (let i = 0; i < 2; i++) {
      const card = document.createElement('div');
      card.className = "card col-sm-8 col-10";
  
      const cardBody = document.createElement('div');
      cardBody.className = "card-body d-flex";
  
      const imgCard = document.createElement('img');
      imgCard.src = data.plat[i].image;
      imgCard.className = "img-fluid rounded-start col-6"; // Adjust the col-6 as needed
  
      const textContent = document.createElement('div');
      textContent.className = "col-6"; // Takes up the remaining space
  
      const pTitle = document.createElement('p');
      pTitle.textContent = data.plat[i].libelle;
  
      const pDesc = document.createElement('p');
      pDesc.textContent = data.plat[i].description;
  
      platindex.append(card);
      card.append(cardBody);
      cardBody.append(imgCard);
      cardBody.append(textContent);
      textContent.append(pTitle);
      textContent.append(pDesc);
  }
  
  

})


//-----------------PAGE DES PLATS---------------------//


// $(document).ready(function () {
//   var data;
//   var currentIndexPlats = 0;
//   var itemsPerPagePlats = 4;

//   function loadDataAndShowPlats() {
//     $.ajax({
//       url: 'data.json',
//       type: 'GET',
//       dataType: 'json',
//       success: function (jsonData) {
//         data = jsonData;
//         showPlats();
//       },
//       error: function (error) {
//         console.error('Erreur lors du chargement du fichier JSON :', error);
//       }
//     });
//   }

//   function showPlats() {
//     $('#page-plats-container').empty();
//     var platsToShow = data.plat.slice(currentIndexPlats, currentIndexPlats + itemsPerPagePlats);

//     platsToShow.forEach(function (plat) {
//       var platHtml = `
//         <div class="card col-sm-8 col-10" style="max-width: 540px;">
//           <div class="row g-0">
//             <div class="col-md-4">
//               <img src="${plat.image}" class="img-fluid rounded-start col-12" style="height: 100%;" alt="${plat.libelle}">
//             </div>
//             <div class="col-md-8">
//               <div class="card-body ">
//                 <h5 class="card-title">${plat.libelle}</h5>
//                 <p class="card-text">${plat.description}</p>
//                 <p class="card-price">${plat.prix}€</p>
//                 <a href="commande.html" class="btn btn-primary">Commander</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;
//       $('#page-plats-container').append(platHtml);
//     });

//     updatePaginationButtonsPlats();
//   }

//   function updatePaginationButtonsPlats() {
//     $('#precedent-btn-plats').prop('disabled', currentIndexPlats === 0);
//     $('#suivant-btn-plats').prop('disabled', currentIndexPlats + itemsPerPagePlats >= data.plat.length);
//   }

//   function navigatePlats(offset) {
//     currentIndexPlats += offset;
//     if (currentIndexPlats < 0) {
//       currentIndexPlats = 0;
//     } else if (currentIndexPlats >= data.plat.length) {
//       currentIndexPlats = data.plat.length - itemsPerPagePlats;
//     }
//     showPlats();
//   }

//   $('#precedent-btn-plats').on('click', function (event) {
//     event.preventDefault();
//     navigatePlats(-itemsPerPagePlats);
//   });

//   $('#suivant-btn-plats').on('click', function (event) {
//     event.preventDefault();
//     navigatePlats(itemsPerPagePlats);
//   });

//   // Charger le fichier JSON via AJAX et afficher les plats
//   loadDataAndShowPlats();
// });

$.get('data.json' ,function (data){
    
  const plat = $('#plat');

  for (let i = 0; i < 4; i++) {
      const card = document.createElement('div');
      card.className = "card col-sm-8 col-10";
  
      const cardBody = document.createElement('div');
      cardBody.className = "card-body d-flex";
  
      const imgCard = document.createElement('img');
      imgCard.src = data.plat[i].image;
      imgCard.className = "img-fluid rounded-start col-6"; // Adjust the col-6 as needed
  
      const textContent = document.createElement('div');
      textContent.className = "col-6"; // Takes up the remaining space
  
      const pTitle = document.createElement('p');
      pTitle.textContent = data.plat[i].libelle;
  
      const pDesc = document.createElement('p');
      pDesc.textContent = data.plat[i].description;
  
      plat.append(card);
      card.append(cardBody);
      cardBody.append(imgCard);
      cardBody.append(textContent);
      textContent.append(pTitle);
      textContent.append(pDesc);
  }
  
  

})

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









