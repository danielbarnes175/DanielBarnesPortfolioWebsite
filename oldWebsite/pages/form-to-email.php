<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  if (IsInjected($visitor_email)) {
  	echo "Bad Email Value";
  	exit;
  }

  $email_from = 'emailform@danielbarnes175.com';
  $email_subject = "New Form Submission";
  $email_body = "You have received a new message from the user $name.\n".
  				"Their email is $visitor_email\n".
  				"Here is the message:\n $message".

  $to = "danielbarnes175@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);
  header('Location: thank-you.html');

  function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    if(preg_match($inject,$str)) {
      return true;
    }
    else {
      return false;
    }
}

?>
