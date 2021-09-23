<?php

  require 'database.php';

  $message = '';
  $rol_id="2";

  if (!empty($_POST['email']) && !empty($_POST['password'])) {
    $sql = "INSERT INTO users (email, password,rol_id) VALUES (:email, :password,$rol_id)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $stmt->bindParam(':password', $password);
    

    if ($stmt->execute()) {
      echo "<script> alert('Usuario registrdo correctamente');
                window.location= '../vista/signup.php' </script>";
      //$message = 'Usuario registrado';
    } else {
      echo "<script> alert('Error al registrar usuario');
                window.location= '../vista/signup.php' </script>";
      //$message = 'Error a la hora de llenar la informacion';
    }
  }
?>