//---FORM VALIDATE CONTACT---//

$(document).ready(function () {
  $("#FormValidate").submit(function (event) {

    event.preventDefault();

    // Last Name Check
    const lastname = document.querySelector("#lastname");
    const error_lastname = document.querySelector("#error_lastname");

    if ($(lastname).val().trim() === ""||!isValidLastName($(lastname).val())) {
      $(error_lastname).html("<p class=error>Entrez un nom valide Uniquement des lettres.</p>");
    return;
    } else {
      $(error_lastname).html("");
    }
// Fisrt Name Check
    const firstname = document.querySelector("#firstname");
    const error_firstname = document.querySelector("#error_firstname");

    if ($(firstname).val().trim() === ""||!isValidFirstName($(firstname).val())) {
      $(error_firstname).html("<p class=error>Entrez un prénom valide Uniquement des lettres.</p>");
    return;
    } else {
      $(error_firstname).html("");
    }
// Email Check
    const email = document.querySelector("#email");
    const error_email = document.querySelector("#error_email");

    if ($(email).val().trim() === "" || !isValidEmail($(email).val())) {
      $(error_email).html("<p class=error>Veuillez saisir une adresse mail valide.</p>")
    return;
    } else {
      $(error_email).html("");
    }
// Phone Check
    const phone = document.querySelector("#phone");
    const error_phone = document.querySelector("#error_phone");

    if ($(phone).val().trim() === "" || !isValidPhoneNumber($(phone).val())) {
      $(error_phone).html("<p class=error>Veuillez saisir téléphone valide (10chiffres).</p>")
    return;
    } else {
      $(error_phone).html("");
    }
// Request Check
    const request = document.querySelector("#demande");
    const error_request = document.querySelector("#error_request");

    if ($(request).val().trim() === "") {
      $(error_request).html("<p class=error >Veuillez saisir votre demande.</p>")
      return;
    } else {
      $(error_request).html("");
    }

    $(this).unbind('submit').submit();

    this.reset();




  });

// Function Check to input

  function isValidLastName(lastname) {
    return /^[a-zA-Z]+$/.test(lastname);
  }


  function isValidFirstName(firstname) {
    return /^[a-zA-Z]+$/.test(firstname);
  }



  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber);
  }


  //--FORM VALIDATE COMMANDE & CARD COMMANDE---//

// Take the Id in the Url 

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const platId = urlParams.get('id');

  console.log(platId);

  const platDetail = $('#commande');
  const libelle_plat = $('#libelle_plat');
// Get data from Json File
  $.get('Assets/json/data.json', function (data) {
    const plat = data.plat.find(plat => plat.id_plat == platId);

    const t_plat = document.createElement('h3')
    t_plat.textContent=plat.libelle
    libelle_plat.append(t_plat)
    const elem_plat = document.createElement('div');
    elem_plat.className = "card col-8 mx-auto mt-4";

    const img_plat = document.createElement('img');
    img_plat.src = plat.image;
    img_plat.className = "img-fluid ";
    

    const text_plat = document.createElement('div');
    text_plat.className = "card-body card-title row";

    const title_plat = document.createElement('p');
    title_plat.textContent = plat.libelle;

    const pprice = document.createElement('p');
    pprice.textContent = plat.prix + '€';
    pprice.className = 'col-6 card-price';

    const desc_plat = document.createElement('p');
    desc_plat.textContent = plat.description;
    desc_plat.className = "card-text"


    platDetail.append(elem_plat);
    elem_plat.append(img_plat, text_plat);
   
    text_plat.append(title_plat , desc_plat,pprice);

  });

// Validate Order Form
  $("#Form_commande_Validate").submit(function (event) {
    event.preventDefault();




    const lastname = document.querySelector("#lastname");
    const error_lastname = document.querySelector("#error_lastname");


    if ($(lastname).val().trim() === "") {
      $(error_lastname).html("<p class=error>Entrez un nom valide.</p>");
    return;
    } else {
      $(error_lastname).html("");
    }

    const firstname = document.querySelector("#firstname");
    const error_firstname = document.querySelector("#error_firstname");

    if ($(firstname).val().trim() === "") {
      $(error_firstname).html("<p class=error>Entrez un prénom valide.</p>");
    return;
    } else {
      $(error_firstname).html("");
    }




    const adress = document.querySelector("#adress");
    const error_adress = document.querySelector("#error_adress");

    if ($(adress).val().trim() === "") {
      $(error_adress).html("<p class=error>Veuillez entrez une Adresse Valide.</p>")
    return;
    } else {
      $(error_adress).html("");
    }

    const phone = document.querySelector("#phone");
    const error_phone = document.querySelector("#error_phone");


    if ($(phone).val().trim() === "" || !isValidPhoneNumber($(phone).val())) {
      $(error_phone).html("<p class=error>Veuillez saisir téléphone valide (10chiffres).</p>")
      return;
    } else {
      $(error_phone).html("");
    }



    $(this).unbind('submit').submit();

    this.reset();

  });


  function isValidPhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber);
  }






});