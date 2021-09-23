<?php
session_start();
//require '../vista/header.php';
require 'database.php';
?>



<div align="center">
<?php  
$busqueda1=$_GET['id_horario'];
$Estado='libre';

$sesion=$_SESSION['user_id'];
$sql = $conn->prepare("DELETE FROM reservas WHERE id_usu = '$sesion' AND id_horario= '$busqueda1'");

    if ($sql->execute()) {

$sql5 = $conn->prepare("UPDATE horario SET estado='$Estado' WHERE id_horario = '$busqueda1'");
$sql5->execute();
	  echo "<script> alert('Reserva cancelada  correctamente');
                window.location= '../vista/misreservas.php' </script>";
      //$message = 'Reserva cancelada  correctamente';
    } else {
    	echo "<script> alert('Error al cancelar reserva');
                window.location= '../vista/misreservas.php' </script>";

      //$message = 'Error al cancelar reserva';
    }
echo $message;
 ?>


