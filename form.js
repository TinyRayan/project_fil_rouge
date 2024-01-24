//-------------------------------------------Verif contact form-------------------------//

  
  $(document).ready(function(){
    $("#FormValidate").submit(function(event){
      event.preventDefault();
  
      

      
      const lastname = document.querySelector("#lastname");
      const error_lastname = document.querySelector("#error_lastname");
      

      if ($(lastname).val().trim() === ""){
        $(error_lastname).html("<p class=error>Entrez un nom valide.</p>");
      } else {
        $(error_lastname).html(""); 
      } 
     
      const firstname = document.querySelector("#firstname");
      const error_firstname = document.querySelector("#error_firstname");
     
      if ($(firstname).val().trim() === ""){
        $(error_firstname).html("<p class=error>Entrez un prénom valide.</p>");
      } else {
        $(error_firstname).html(""); 
     }

      const email = document.querySelector("#email");
      const error_email = document.querySelector("#error_email");


      if($(email).val().trim()=== "" || !isValidEmail($(email).val())){
        $(error_email).html("<p class=error>Veuillez saisir une adresse mail valide.</p>")
      } else {
        $(error_email).html("");
      }

      const phone = document.querySelector("#phone");
      const error_phone = document.querySelector("#error_phone");


      if ($(phone).val().trim() === "" || !isValidPhoneNumber($(phone).val())){
        $(error_phone).html("<p class=error>Veuillez saisir téléphone valide (10chiffres).</p>")
      } else {
        $(error_phone).html("");
      }

      const request = document.querySelector("#demande");
      const error_request = document.querySelector("#error_request");

      if ($(request).val().trim()=== ""){
        $(error_request).html("<p class=error >Veuillez saisir votre demande</p>")        
        return;
      } else {
        $(error_request).html("");
      }
      
        
      $(this).unbind('submit').submit();
     
      this.reset(); 
     
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