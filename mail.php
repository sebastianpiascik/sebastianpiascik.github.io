<?php

    $name = $email = $phone = $subject = $message = '';
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        $subject = trim($_POST["subject"]);
//        $phone = trim($_POST["phone"]);
        
        if (empty($name) OR empty($message) OR empty($email) OR empty($message)) {
            echo "Proszę uzupełnić wszystkie pola.";
            exit;
        } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Niepoprawny adres e-mail.";
            exit;
        }
        
        $recipient = "sebastian.piascik97@gmail.com";
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Message:\n$message\n";
        
        $email_headers = "From: $name <$email>\nContent-Type: text/plain; charset=UTF-8\n";
        
        if (mail($recipient, $subject, $email_content, "-f $email_headers")) {
            echo "Dziękujemy! Wiadomość została wysłana..";
        } else {
            echo "Niestety nie udało się wysłać wiadomości.";
        }
        
        
    } else {
        echo "Proszę spróbować jeszcze raz.";
    }
?>




