<?php
  require 'database.php';
  
  $message = '';
  

  if (!empty($_POST['cantidad']) && !empty($_POST['detalles'])) {
    $sql = "INSERT INTO elementos (cantidad, detalles) VALUES (:cantidad, :detalles)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':cantidad', $_POST['cantidad']);
    $stmt->bindParam(':detalles', $_POST['detalles']);
    

    if ($stmt->execute()) {
      echo "<script> alert('Elemento añadido correctamente');
              window.location= '../vista/agregel.php' </script>";
    } else {
      echo "<script> alert('Error al añadir el elemento');
              window.location= '../vista/agregel.php' </script>";
    }
  }
?>