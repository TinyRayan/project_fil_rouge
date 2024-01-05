//-------------------------------------------Verif contact form-------------------------//


$(document).ready(function () {
    // Validation du formulaire lors de la soumission
    $(".formcontact").submit(function (event) {
        // Supprimer les messages d'erreur précédents
        $(".error-message").empty();

        // Validation du champ Nom
        var nom = $("#Nom").val();
        if (nom === "") {
            // Afficher l'erreur dans la div "erreurnom"
            $("#erreurnom").text("Veuillez entrer votre nom.");
            event.preventDefault(); // Empêche l'envoi du formulaire
            return;
        }

        // Validation du champ Prenom
        var prenom = $("#Prenom").val();
        if (prenom === "") {
            // Afficher l'erreur dans la div "erreurPrenom"
            $("#erreurPrenom").text("Veuillez entrer votre prénom.");
            event.preventDefault();
            return;
        }

        // Validation du champ Email
        var email = $("#Email").val();
        if (email === "" || !isValidEmail(email)) {
            // Afficher l'erreur dans la div "erreurEmail"
            $("#erreurEmail").text("Veuillez entrer une adresse e-mail valide.");
            event.preventDefault();
            return;
        }

        // Validation du champ Téléphone
        var tel = $("#Tel").val();
        if (tel === "" || !isValidPhoneNumber(tel)) {
            // Afficher l'erreur dans la div "erreurTel"
            $("#erreurTel").text("Veuillez entrer un numéro de téléphone valide.");
            event.preventDefault();
            return;
        }

        // Validation du champ Demande
        var demande = $("textarea").val();
        if (demande === "") {
            // Afficher l'erreur dans la div "erreurtext"
            $("#erreurtext").text("Veuillez entrer votre demande.");
            event.preventDefault();
            return;
        }

        var adresse = $("#Adresse").val();
        if (adresse === "") {
            // Afficher l'erreur dans la div "erreuradresse"
            $("#erreuradresse").text("Veuillez entrer votre adresse.");
            event.preventDefault(); // Empêche l'envoi du formulaire
            return;
        }

        // Si toutes les validations passent, le formulaire est soumis
        alert("Formulaire soumis avec succès!");
    });

    // Fonction pour valider le format de l'email
    function isValidEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Fonction pour valider le format du numéro de téléphone
    function isValidPhoneNumber(phoneNumber) {
        var phonePattern = /^\d{10}$/; // Exemple : 1234567890
        return phonePattern.test(phoneNumber);
    }
});


//------------------------------------verif commande form---------------------------//



$(document).ready(function() {
    $(".formcommande").submit(function(event) {
      // Empêcher le comportement par défaut du formulaire (rechargement de la page)
      event.preventDefault();

      // Vos validations ici
      var nom = $("#nomcommande").val();
      var prenom = $("#Prenomcommande").val();
      var adresse = $("#adressecommande").val();
      var telephone = $("#telcommande").val();

      // Exemple de validation simple (non vide)
      if (nom === "") {
        displayError($("#nomcommande"), "Veuillez entrer votre nom.");
        return;
      }

      if (prenom === "") {
        displayError($("#Prenomcommande"), "Veuillez entrer votre prénom.");
        return;
      }

      if (adresse === "") {
        displayError($("#adressecommande"), "Veuillez entrer votre adresse.");
        return;
      }

      if (telephone === "") {
        displayError($("#telcommande"), "Veuillez entrer votre numéro de téléphone.");
        return;
      }

      // Si toutes les validations passent, vous pouvez soumettre le formulaire
      alert("Formulaire validé avec succès!");
      // Vous pouvez également utiliser $(this).submit(); pour soumettre le formulaire réellement
    });

    function displayError(element, message) {
      // Afficher le message d'erreur sous le champ avec la classe alert-warning
      var errorDiv = $("<div>").addClass("alert alert-warning").text(message);
      element.closest(".mb-3").append(errorDiv);
    }
  });