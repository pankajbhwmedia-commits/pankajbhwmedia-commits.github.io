<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
    // Sanitize input
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $msg = filter_var(trim($_POST['msg']), FILTER_SANITIZE_STRING);

    // Simple validation
    if (empty($name) || empty($email) || empty($msg)) {
        echo "Please fill all the fields.";
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Prepare email
    $to = "pankajbhwmedia@gmail.com";
    $subject = "New message from $name";
    $message = "Name: $name\nEmail: $email\n\nMessage:\n$msg";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Error sending message. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>