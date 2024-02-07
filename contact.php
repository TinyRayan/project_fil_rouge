<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact</title>
  <link rel="icon" href="Assets/images_the_district/the_district_brand/logo.ico" type="image/x-icon">
  <link rel="shortcut icon" href="Assets/images_the_district/the_district_brand/logo.ico" type="image/x-icon">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" 
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="Assets/styles/styles.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
  integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="Assets/scripts/form.js"></script>
</head>
<body>



             <!-----Header----->
        
        
             <?php
  require_once('Assets/php/menu.php')
?>
        
    <!----Main Code (Contact)----->
            
<h1 class="d-flex justify-content-center m-2">Contact</h1>

<form class="mt-4 form-bg" action="Assets\php\form.php" method="POST" id="FormValidate">

  <div class=" cnt">
    <label for="lastname" class="form-label">Nom :</label>
    <input type="text" class="form-control" id="lastname" name="lastname">
    <div id="error_lastname"></div>
  </div>

  <div class="cnt">
    <label for="firstname" class="form-label">Prenom :</label>
    <input type="text" class="form-control" id="firstname" name="firstname">
    <div id="error_firstname"></div>
  </div>

  <div class="cnt">
    <label for="email" class="form-label">Email :</label>
    <input type="email" class="form-control" id="email" name="email">
    <div id="error_email"></div>
  </div>

  <div class="cnt">
    <label for="phone" class="form-label">Téléphone :</label>
    <input type="text" class="form-control" id="phone" name="phone">
    <div id="error_phone"></div>
  </div> 

  <div class="input-group justify-content-center mb-3 mt-2">
    <label for="demande">Votre Demande
      <textarea class="form-control" aria-label="With textarea" id="demande" name="demande"></textarea>
    </label>
    <div id="error_request"></div>
  </div>

  <button type="submit" class="btn btn-primary" id="submitButton">Envoyer</button>
  <button class="reload mt-2" type="reset" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
  </svg></button>

</form>
  
<!-----Footer(img network)----->

<?php
  require_once('Assets/php/footer.php')
?>
