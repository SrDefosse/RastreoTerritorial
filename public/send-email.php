<?php
// Permitir peticiones desde el dominio de nuestra aplicación
header('Access-Control-Allow-Origin: *'); // Para desarrollo. En producción, restringe esto a tu dominio específico
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtener y limpiar los datos del JSON
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = isset($input['name']) ? trim($input['name']) : '';
    $email = isset($input['email']) ? trim($input['email']) : '';
    $message = isset($input['message']) ? trim($input['message']) : '';

    if (empty($name) || empty($email) || empty($message)) {
        echo "error";
        exit;
    }

    $to = "blinksitesweb@gmail.com"; // Para pruebas
    $subject = "Nuevo mensaje de: $name";
    $body = "Nombre: $name\nEmail: $email\n\nMensaje:\n$message";
    $headers = "From: no-reply@rastreoterritorial.com\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "error";
} 