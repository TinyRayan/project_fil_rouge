//---FORM VALIDATE CONTACT---//
  
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
        $(error_request).html("<p class=error >Veuillez saisir votre demande.</p>")        
      } else {
        $(error_request).html("");
      }
      

      const adress = document.querySelector("#adress");
      const error_adress = document.querySelector("#error_adress");

      if ($(adress).val().trim()=== ""){
        $(error_adress).html("<p class=error>Veuillez entrez une Adresse Valide.</p>")
        return;
      } else{
        $(error_adress).html("");
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

    

  
  
  


//--FORM VALIDATE COMMANDE---//



  
$("#Form_commande_Validate").submit(function(event){
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


 
  
  const adress = document.querySelector("#adress");
  const error_adress = document.querySelector("#error_adress");

  if ($(adress).val().trim()=== ""){
    $(error_adress).html("<p class=error>Veuillez entrez une Adresse Valide.</p>")
  } else{
    $(error_adress).html("");
  }
  
  const phone = document.querySelector("#phone");
  const error_phone = document.querySelector("#error_phone");


  if ($(phone).val().trim() === "" || !isValidPhoneNumber($(phone).val())){
    $(error_phone).html("<p class=error>Veuillez saisir téléphone valide (10chiffres).</p>")
  return;
  } else {
    $(error_phone).html("");
  }


    
  $(this).unbind('submit').submit();
 
  
 
});





 




function isValidPhoneNumber(phoneNumber) {
  return /^\d{10}$/.test(phoneNumber);
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
