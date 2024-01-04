$(document).ready(function () {
    // Validation du formulaire lors de la soumission
    $("form").submit(function (event) {
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
