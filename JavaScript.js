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

// document.addEventListener("DOMContentLoaded", function () {
//   // Charger le fichier JSON avec une requête AJAX
//   var xhr = new XMLHttpRequest();

//   xhr.open("GET", "data.json", true);

//   xhr.onreadystatechange = function () {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//           // Analyser la réponse JSON
//           var jsonData = JSON.parse(xhr.responseText);

//           // Utiliser les données dans le HTML
//           displayData(jsonData);
//       }
//   };

//   xhr.send();

//   // Fonction pour afficher les données dans le HTML
//   function displayData(data) {
//       var contentDiv = document.getElementById("content");

//       // Ajouter l'image
//       var imageElement = document.createElement("img");
//       imageElement.src = data.image;
//       contentDiv.appendChild(imageElement);

//       // Ajouter la description
//       var descriptionElement = document.createElement("p");
//       descriptionElement.textContent = data.description;
//       contentDiv.appendChild(descriptionElement);
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // Charger le fichier JSON avec une requête AJAX
//   var xhr = new XMLHttpRequest();

//   xhr.open("GET", "data.json", true);

//   xhr.onreadystatechange = function () {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//           // Analyser la réponse JSON
//           var jsonData = JSON.parse(xhr.responseText);

//           // Utiliser les données dans le HTML
//           displayImages(jsonData.categorie); // Utilise les images des catégories
//           // displayImages(jsonData.plat);      // Utilise les images des plats
//       }
//   };

//   xhr.send();

//   // Fonction pour afficher les images dans le HTML
//   function displayImages(imagesData) {
//       var imageContainer = document.getElementById("imagetest");

//       // Parcourir chaque image dans le tableau
//       imagesData.forEach(function (imageData) {
//           // Créer un élément image
//           var imageElement = new Image();

//           // Définir la source de l'image
//           imageElement.src = imageData.image;
//           imageElement.alt = "Image avec ID : " + imageData.id_categorie; // ou imageData.id_plat

//           // Ajouter l'image au conteneur
//           imageContainer.appendChild(imageElement);
//       });
//   }
// });


document.addEventListener("DOMContentLoaded", function () {
  // Charger le fichier JSON avec une requête AJAX
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "data.json", true);

  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          // Analyser la réponse JSON
          var jsonData = JSON.parse(xhr.responseText);

          // Utiliser les données dans le HTML
          displayCategoryImages(jsonData.categorie); // Utilise les images des catégories
      }
  };

  xhr.send();

  // Fonction pour afficher une seule image par div
  function displayCategoryImages(categoryData) {
      var imageContainer = document.getElementById('imagetest');

      // Parcourir chaque catégorie dans le tableau
      categoryData.forEach(function (category) {
          // Créer une div pour chaque catégorie
          var categoryDiv = document.createElement('div');

          // Créer un élément image pour la catégorie
          var categoryImage = new Image();
          categoryImage.src = category.image;
          categoryImage.alt = category.libelle;

          // Ajouter l'image à la div de catégorie
          categoryDiv.appendChild(categoryImage);

          // Ajouter la div de catégorie au conteneur principal
          imageContainer.appendChild(categoryDiv);
      });
  }
});
