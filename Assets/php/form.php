
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $lastname = isset($_POST["lastname"]) ? $_POST["lastname"] : "";
    $firstname = isset($_POST["firstname"]) ? $_POST["firstname"] : "";
    $email = isset($_POST["email"]) ? $_POST["email"] : "";
    $phone = isset($_POST["phone"]) ? $_POST["phone"] : "";
    $request = isset($_POST["demande"]) ? $_POST["demande"] : "";

    $current_time = date("Y-m-d H:i:s");

    // Build the data string
    $data = "Nom: $lastname\nPrénom: $firstname\nEmail: $email\nTéléphone: $phone\nDemande: $request\nHeure: $current_time\n\n";

    // Specify the relative path within the project directory
    $file_path = "/var/www/html/donnees_formulaire_$current_time.txt";

    // Save data to the file
    if (file_put_contents($file_path, $data, FILE_APPEND) !== false) {
        echo "Formulaire soumis avec succès !";
    } else {
        echo "Erreur lors de l'enregistrement du formulaire.";
    }
} else {
    echo "Méthode non autorisée";
}
?>
