<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>plats</title>
    <link rel="icon" href="Assets/images_the_district/the_district_brand/logo.ico" type="image/x-icon">
  <link rel="shortcut icon" href="Assets/images_the_district/the_district_brand/logo.ico" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" 
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="Assets/styles/styles.css">
    
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 

integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

<script src="Assets/scripts/JavaScript.js"></script>    
<script src="Assets/scripts/plat_cat.js"></script>
</head>
<body>
  
  

        <!--Navigation-->
        <?php
  require_once('Assets/php/menu.php')
?>

<div class="d-flex justify-content-center m-2" id="title"></div>
<div id="desc-cat" class="card"></div>

<div id="plats" class="row"></div>


<?php
  require_once('Assets/php/footer.php')
?>