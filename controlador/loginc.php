<?php
    //session_start();
    require 'database.php';
    
    session_start();

  if (isset($_SESSION['user_id'])) {
    header('Location: reserva2.php');
  }
  require 'database.php';

  if (!empty($_POST['email']) && !empty($_POST['password'])) {
    $records = $conn->prepare('SELECT id_usu, email, rol_id, password FROM users WHERE email = :email');
    $records->bindParam(':email', $_POST['email']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $message = '';

    if (count($results) > 0 && password_verify($_POST['password'], $results['password'])) {
      $_SESSION['user_id'] = $results['id_usu'];
      $_SESSION['user_role'] = $results['rol_id'];

      if($_SESSION['user_role'] == "1")
      {
        header("Location: admin.php");
      } else {
        header("Location: ../vista/reserva2.php");
      }

    } else {  

       header('Location: ../vista/error.php');

    }
  }
?>