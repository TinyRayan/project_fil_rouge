<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accueil</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" 
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
 <link rel="stylesheet" href="Assets/styles/styles.css">
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
 integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
 <script src="Assets/scripts/JavaScript.js" ></script>
 <script src="Assets/scripts/search.js"></script>  
</head>
<body>


      <!-----NAVAGATION----->

  <?php
  require_once("Assets/php/menu.php");

  ?>
          <!--research bar-->
 
<h1 class="d-flex justify-content-center ">Accueil</h1>
  
 

<div class="search-container d-none d-sm-block ">

  <input type="text" id="searchInput"  placeholder="Rechercher...">

  <ul id="results"></ul>

</div>


<!----Main Code (catégory & plats)----->

<h3 class="justify-content-center d-flex mb-4">Quelques Catégories</h3>
<!--Catégories-->
<div id="catindex" class="row m-0"></div>


<h3 class="justify-content-center d-flex mt-3">Quelques Plats</h3>
<!--Plats-->
<div id="platindex" class="row m-0"></div>



<!-----Footer(img network)----->

<?php
require_once('Assets/php/footer.php')
?>

















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































