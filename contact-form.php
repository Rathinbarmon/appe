<?php
	// Naming Constant
	define( "RECIPIENT_NAME", "John Doe" );
	define( "RECIPIENT_EMAIL", "someone@mail.com" );
	// Values
	$success = false;
	$senderName = isset( $_POST['username'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['username'] ) : "";
	$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
	$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";
	// Send the email
	if ( $senderName && $senderEmail && $message ) {
	  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
	  $headers = "From: " . $senderName . " <" . $senderEmail . ">";
	  $success = mail( $recipient, $message, $headers );
	  //Set Location
	  header('Location: index.html');
	}
?>