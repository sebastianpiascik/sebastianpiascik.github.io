<?php
  $to = "sebastian.piascik97@gmail.com";
  $name = $_REQUEST['name'];
  $message = $_REQUEST['message'];
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  $txt = "Otrzymano zgłoszenie od:
 Imie: $name
 E-mail: $email
 Wiadomość: $message";
  
  //send email
  mail($to, $subject, $txt, "-f $email"); 
?>
<?php
//Email response
  echo "Thank you for contacting us!";
echo "<a href='index.html'>Back to main website</a>";
?>