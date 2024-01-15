//-------------------------------------------Verif contact form-------------------------//

$(document).ready(function () {
  $("#myForm").submit(function (event) {
    event.preventDefault();

    $(".alert").addClass("d-none");

    if ($("#Nom").val().trim() === "") {
      $("#nomAlert1").removeClass("d-none");
      return;
    }

    if ($("#Prenom").val().trim() === "") {
      $("#prenomAlert1").removeClass("d-none");
      return;
    }

    if ($("#Email").val().trim() === "" || !isValidEmail($("#Email").val())) {
      $("#emailAlert1").removeClass("d-none");
      return;
    }

    if ($("#Tel").val().trim() === "" || !isValidPhoneNumber($("#Tel").val())) {
      $("#telError1").removeClass("d-none");
      return;
    }

    if ($("#demande").val().trim() === "") {
      $("#demandeError1").removeClass("d-none");
      return;
    }

    // Si tous les champs sont valides, vous pouvez soumettre le formulaire
    console.log("Formulaire valide. Envoi du formulaire...");
    // Décommentez la ligne ci-dessous pour soumettre le formulaire
    
    $(this).unbind('submit').submit();
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber);
  }
});


//------------------------------------verif commande form---------------------------//


$(document).ready(function () {
  $('.formcommande').submit(function () {
    
    // Validation du nom
    var nom = $('#nomcommande').val();
    if (nom.trim() === '') {
      $('#nomAlert').removeClass('d-none');
      return false; // Empêcher l'envoi du formulaire
    } else {
      $('#nomAlert').addClass('d-none');
    }

    // Validation du prénom
    var prenom = $('#Prenomcommande').val();
    if (prenom.trim() === '') {
      $('#prenomAlert').removeClass('d-none');
      return false; // Empêcher l'envoi du formulaire
    } else {
      $('#prenomAlert').addClass('d-none');
    }

    // Validation de l'adresse
    var adresse = $('#adressecommande').val();
    if (adresse.trim() === '') {
      $('#adresseAlert').removeClass('d-none');
      return false; // Empêcher l'envoi du formulaire
    } else {
      $('#adresseAlert').addClass('d-none');
    }

    // Validation du téléphone
    var tel = $('#telcommande').val();
    if (!/^\d{10}$/.test(tel)) {
      $('#telError').removeClass('d-none');
      return false; // Empêcher l'envoi du formulaire
    } else {
      $('#telError').addClass('d-none');
    }

    // Si toutes les validations sont passées, le formulaire sera soumis
    return true;
  });
});


//------------------------------------------------ json --------------------------




$(document).ready(function () {
  var nombreCategoriesAffichees = 7; // Spécifiez le nombre de catégories que vous souhaitez afficher
  var nombrePlatsAffiches = 3; // Spécifiez le nombre de plats que vous souhaitez afficher

  // Utiliser Ajax pour charger les données à partir du fichier JSON
  $.ajax({
      url: 'data.json', // Assurez-vous de spécifier le bon chemin vers votre fichier JSON
      dataType: 'json',
      success: function (data) {
          // Récupérer l'élément du conteneur des catégories
          var categoriesContainer = $('#categories-container');

          // Récupérer l'élément du conteneur des plats
          var platsContainer = $('#plats-container');

          // Parcourir les données et créer des cartes pour chaque catégorie
          $.each(data.categorie, function (index, categorie) {
              if (categorie.active.toLowerCase() === 'yes' && index < nombreCategoriesAffichees) {
                  var categoryCard = $('<a href="commande.html" class="image-container col-lg-4 col-md-6 col-sm-10 mx-auto mb-4 d-block image-hover-effect"></a>');

                  // Ajouter l'image de la catégorie à l'élément categoryCard avec la classe img-fluid
                  categoryCard.html(`
                      <img src="${categorie.image}" alt="${categorie.libelle}" class="w-100 img-thumbnail">
                      <div class="category-info">
                          <h2 class="image-text">${categorie.libelle}</h2>
                      </div>
                  `);

                  // Ajouter l'élément categoryCard au conteneur des catégories
                  categoriesContainer.append(categoryCard);
              }
          });

          // Parcourir les données et créer des cartes pour chaque plat
          $.each(data.plat, function (index, plat) {
              if (plat.active.toLowerCase() === 'yes' && index < nombrePlatsAffiches) {
                  var platCard = $('<a href="commande.html" class="image-container col-lg-4 col-md-6 col-sm-8 mx-auto mb-4 d-block image-hover-effect"></a>');

                  // Ajouter l'image du plat à l'élément platCard avec la classe img-fluid
                  platCard.html(`
                      <img src="${plat.image}" alt="${plat.libelle}" class="img-thumbnail">
                      <div class="category-info">
                          <h2 class="image-text">${plat.libelle}</h2>
                      </div>
                  `);

                  // Ajouter l'élément platCard au conteneur des plats
                  platsContainer.append(platCard);
              }
          });
      },
      error: function (error) {
          console.log('Erreur lors du chargement des données JSON');
          console.log(error);
      }
  });
});



// $(document).ready(function () {
//   // Utiliser Ajax pour charger les données à partir du fichier JSON
//   $.ajax({
//     url: 'data.json', // Assurez-vous de spécifier le bon chemin vers votre fichier JSON
//     dataType: 'json',
//     success: function (data) {
//       var menuContainer = $('#menu-container');
//       var maxPlats = 4; // Spécifiez le nombre maximum de plats à afficher

//       // Parcourir les données des plats
//       $.each(data.plat, function (index, plat) {
//         if (plat.active.toLowerCase() === 'yes' && index < maxPlats) {
//           var platCard = $('<div class=" row col-lg-6 " ></div>');
//           platCard.append(`
//           <div class="container row col-12 mx-auto ">
//           <div class="card col-sm-8 col-10" style="max-width: 540px;">
//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img src="${plat.image}" class="img-fluid rounded-start col-12" style="height: 100%;" alt="cesar-salad">
//               </div>

//               <div class="col-md-8">
//                 <div class="card-body" >
//                   <h5 class="card-title">${plat.libelle}</h5>
//                   <p class="card-text">${plat.description}</p>
//                   <p class="card-text">${plat.prix}€</p>
//                   <a href="commande.html" class="btn btn-primary">Commander</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           `);

//           // Ajouter la carte de plat au conteneur du menu
//           menuContainer.append(platCard);
//         }
//       });
//     },
//     error: function (error) {
//       console.log('Erreur lors du chargement des données JSON');
//       console.log(error);
//     }
//   });
// });


$(document).ready(function () {
  // Utiliser Ajax pour charger les données à partir du fichier JSON
  $.ajax({
    url: 'data.json', // Assurez-vous de spécifier le bon chemin vers votre fichier JSON
    dataType: 'json',
    success: function (data) {
      var menuContainer = $('#menu-container');
      var maxPlats = 4; // Spécifiez le nombre maximum de plats à afficher

      // Parcourir les données des plats
      $.each(data.plat, function (index, plat) {
        if (plat.active.toLowerCase() === 'yes' && index < maxPlats) {
          var platCard = $(`
            <div  class="image-container col-lg-6 col-md-12 col-sm-10 mx-auto mb-4 d-block image-hover-effect ">
              <div class="card col-sm-8 col-10" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${plat.image}" class="img-fluid rounded-start col-12 w-100 h-100" ; object-fit: cover;" alt="${plat.libelle}">
                  </div>

                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${plat.libelle}</h5>
                      <p class="card-text">${plat.description}</p>
                      <p class="card-text">${plat.prix}€</p>
                      <a href="commande.html" class="btn btn-primary">Commander</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `);

          // Ajouter la carte de plat au conteneur du menu
          menuContainer.append(platCard);
        }
      });
    },
    error: function (error) {
      console.log('Erreur lors du chargement des données JSON');
      console.log(error);
    }
  });
});
