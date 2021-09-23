<?php
  require 'database.php';
  require '../vista/header.php';
  $message = '';
  $estado="libre";
  
  
  if (!empty($_POST['id_lab']) && !empty($_POST['tipo_lab']) && !empty($_POST['fecha']) && !empty($_POST['hora']) && !empty($_POST['facultad'])) {
    $sql = "INSERT INTO horario (id_lab, tipo_lab,fecha,hora,facultad,estado) VALUES (:id_lab,:tipo_lab,:fecha,:hora,:facultad,:estado)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id_lab', $_POST['id_lab']);
    $stmt->bindParam(':tipo_lab', $_POST['tipo_lab']);//
    $stmt->bindParam(':fecha', $_POST['fecha']);
    $stmt->bindParam(':hora', $_POST['hora']);
    $stmt->bindParam(':facultad', $_POST['facultad']);
    $stmt->bindParam(':estado', $estado);
    

    if ($stmt->execute()) {
      echo "<script> alert('Horario de Laboratorio añadido correctamente');
                window.location= '../vista/horario.php' </script>";      
    } else {
      echo "<script> alert('Error al añadir el horario del Laboratorio');
                window.location= '../vista/horario.php' </script>";
      
    }
  }	

  
  /*if (!empty($_POST['id_lab']) && !empty($_POST['tipo_lab']) && !empty($_POST['fecha']) && !empty($_POST['hora']) && 
  	!empty($_POST['facultad'])) {
  	//echo $_POST['id_lab'],$_POST['tipo_lab'],$_POST['fecha'],$_POST['hora'],$_POST['facultad'],$estado;
    $sql = "INSERT INTO horario (id_lab,tipo_lab,fecha,hora,facultad,estado) VALUES (:id_lab,:tipo_lab,:fecha,:hora,:facultad,
	$estado)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id_lab', $_POST['id_lab']);
    $stmt->bindParam(':tipo_lab', $_POST['tipo_lab']);
    $stmt->bindParam(':fecha', $_POST['fecha']);
    $stmt->bindParam(':hora', $_POST['hora']);
    $stmt->bindParam(':facultad', $_POST['facultad']);
    $stmt->execute();
    

    if ($stmt->execute()) {
    	//echo '<script> alert("Horario publicado correctamente")</script>';
      $message = 'Horario publicado correctamente';
    } else {
    	//echo '<script> alert("Error al publicar horario")</script>';
      $message = 'Error al publicar el horario';
    }
  }
*/
?>