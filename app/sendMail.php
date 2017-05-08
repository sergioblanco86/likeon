<?php

$to = 'sonia.cortes@like-on.co,maritza.sandoval@like-on.co,sergioblanco86@gmail.com';

$subject = 'Formulario de Contacto - Like-On';

$headers = "From: contact@like-on.co\r\n";
$headers .= "Reply-To: noreply@like-on.co\r\n";
$headers .= "CC: noreply@like-on.co\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = '<html><body>';
$message .= '<p><b>Email:</b> '.strip_tags($_POST['email']).'</p>';
$message .= '<p><b>Nombre:</b> '.strip_tags($_POST['name']).'</p>';
$message .= '<p><b>Mensaje:</b> '.strip_tags($_POST['message']).'</p>';
$message .= '</body></html>';

if (mail($to, $subject, $message, $headers)) {
	echo '200';
}else{
	echo '400';
}

?>