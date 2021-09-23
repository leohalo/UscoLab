<?php
  require 'database.php';
  
  $message = '';
  

  if (!empty($_POST['id_lab']) && !empty($_POST['id_ele']) && !empty($_POST['tipo_lab']) && !empty($_POST['cupos']) && !empty($_POST['estado'])) {
    $sql = "INSERT INTO laboratorios (id_lab, id_ele,tipo_lab,cupos,estado) VALUES (:id_lab, :id_ele,:tipo_lab,:cupos,:estado)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id_lab', $_POST['id_lab']);
    $stmt->bindParam(':id_ele', $_POST['id_ele']);//
    $stmt->bindParam(':tipo_lab', $_POST['tipo_lab']);
    $stmt->bindParam(':cupos', $_POST['cupos']);
    $stmt->bindParam(':estado', $_POST['estado']);
    

    if ($stmt->execute()) {
      echo '<script> alert("Laboratorio añadido correctamente")</script>';
    } else {
      echo '<script> alert("Error al añadir el laboratorio")</script>';
    }
  }
?>