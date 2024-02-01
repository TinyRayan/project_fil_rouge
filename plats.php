<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>plats</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" 
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="Assets/styles/styles.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
  integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  <script src="Assets/scripts/JavaScript.js" ></script>
</head>
<body>

  

      <!-----NAVAGATION----->
      <?php
  require_once('Assets/php/menu.php')
?>

          <!--research bar-->

<h1 class="d-flex justify-content-center m-2">Tout les plats</h1>

     

      <!----Main Code (All plats)----->

<div id="plat" class="container row col-12 mx-auto"></div>

<div class="container justify-content-around d-flex mt-3 "> 
  <a href="#" id="prev-btn" class="btn">Précédent</a>
  <a href="#" id="next-btn" class="btn">Suivant</a>
</div> 
        

<!-----Footer(img reseaux)----->


<?php
  require_once('Assets/php/footer.php')
?>