<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $lastname = $_POST["lastname"];
    $firstname = $_POST["firstname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $request = $_POST["demande"];

    // Obtenir l'heure actuelle
    $current_time = date("Y-m-d H:i:s");

    // Créer une chaîne de texte avec les données du formulaire et l'heure
    $data = "Nom: $lastname\nPrénom: $firstname\nEmail: $email\nTéléphone: $phone\nDemande: $request\nHeure: $current_time\n\n";

    // Spécifiez le chemin du fichier dans lequel vous souhaitez sauvegarder les données
    $file_path = "/var/www/html/donnees_formulaire_$current_time.txt";

    // Ouvrez le fichier en mode écriture, ajoutez les données et fermez le fichier
    file_put_contents($file_path, $data, FILE_APPEND);

    // Réponse (facultatif, vous pouvez personnaliser cela en fonction de vos besoins)
    echo "Formulaire soumis avec succès !";
}
?>