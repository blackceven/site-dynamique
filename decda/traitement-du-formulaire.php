<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Récupérer les données du formulaire
  $nom = $_POST["nom"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Adresse e-mail du propriétaire
  $destinataire = "decdacmr@gmail.com";

  // Sujet de l'e-mail
  $sujet = "Nouveau message de $nom";

  // Contenu de l'e-mail
  $contenu = "Nom: $nom\n";
  $contenu .= "Email: $email\n\n";
  $contenu .= "Message:\n$message";

  // En-têtes de l'e-mail
  $headers = "From: $nom <$email>";

  // Envoyer l'e-mail
  if (mail($destinataire, $sujet, $contenu, $headers)) {
    echo "Votre message a été envoyé avec succès.";
  } else {
    echo "Une erreur s'est produite lors de l'envoi du message.";
  }
}
?>
