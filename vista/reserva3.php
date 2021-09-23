<?php
session_start();
require '../controlador/database.php';	
$Id_usu=$_SESSION['user_id'];
$busqueda1=$_GET['id_horario'];

    $sql = $conn->prepare('SELECT * FROM horario WHERE id_horario = :id ');
    $sql->bindParam(':id', $busqueda1);
    $sql->execute();
    $resultado = $sql->fetch(PDO::FETCH_ASSOC);

$horario = null;
    if (count($resultado) > 0) {
      $horario = $resultado;
    }

 
 ?>


<?php require 'header1.php'; ?>

 
<div align="center">

        


<?php 
//$Id_usu=$horario['id_usu'];
$Id_horario=$horario['id_horario'];
$Id_lab=$horario['id_lab'];
$Fecha=$horario['fecha'];
$Hora=$horario['hora'];
$Estado='reservado';
 ?>


<?php

 $sql4=$conn->prepare("INSERT INTO reservas(id_usu, id_horario, id_lab, fecha, hora) VALUES ('$Id_usu', '$Id_horario', '$Id_lab', '$Fecha', '$Hora')");


 
if ($sql4->execute()) {

$sql5 = $conn->prepare("UPDATE horario SET estado='$Estado' WHERE id_horario = '$Id_horario'");
$sql5->execute();
      $message = 'Reserva realizada correctamente';
    } else {
      $message = 'Error al realizar reserva';
    }
echo $message;


    
?>
<br />
<a href='reserva2.php'>Volver</a>
</div>



 </body>
 </html>
