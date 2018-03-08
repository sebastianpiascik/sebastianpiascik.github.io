<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        $phone = trim($_POST["phone"]);
        $choose = trim($_POST["choose"]);
        $check = trim($_POST["check"]);


        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR empty($phone) OR empty($check) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Proszę spróbować jeszcze raz.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "sebastian.piascik97@gmail.com";

        // Set the email subject.
        $subject = "Kontakt z Front-end $name";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Phone: $phone\n\n";
        $email_content .= "Subject: $choose\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>\nContent-Type: text/plain; charset=UTF-8\n";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
        $recipient = "sebastian.piascik97@gmail.com";
		//mail($recipient, $subject, $email_content, $email_headers);
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Dziękujemy! Wiadomość została wysłana..";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Niestety nie udało się wysłać wiadomości.";
        }

	} else {
		// Not a POST request, set a 403 (forbidden) response code.
		http_response_code(403);
		echo "Proszę spróbować jeszcze raz.";
	}

?>
