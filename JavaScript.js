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

document.addEventListener("DOMContentLoaded", function () {
    // Charger le fichier JSON avec une requête AJAX
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "data.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Analyser la réponse JSON
            var jsonData = JSON.parse(xhr.responseText);

            // Utiliser les données dans le HTML
            displayData(jsonData);
        }
    };

    xhr.send();

    // Fonction pour afficher les données dans le HTML
    function displayData(data) {
        var contentDiv = document.getElementById("testajax");

        // Ajouter l'image
        var imageElement = document.createElement("img");
        imageElement.src = data.image;
        contentDiv.appendChild(imageElement);

        // Ajouter la description
        var descriptionElement = document.createElement("p");
        descriptionElement.textContent = data.description;
        contentDiv.appendChild(descriptionElement);
    }
});














