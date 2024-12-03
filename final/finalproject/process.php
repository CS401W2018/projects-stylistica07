<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $recipeName = htmlspecialchars($_POST["recipe-name"]);
    $description = htmlspecialchars($_POST["description"]);

    echo "<h1>Thank you, $name!</h1>";
    echo "<p>Your recipe for '$recipeName' has been submitted successfully.</p>";
    echo "<p>Description: $description</p>";
    echo "<p>We will contact you at $email if needed.</p>";
}
?>
