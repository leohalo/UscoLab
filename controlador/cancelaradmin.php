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
$sql = $conn->prepare("DELETE FROM horario WHERE id_horario= '$busqueda1'");

    if ($sql->execute()) {
	  echo "<script> alert('Laboratorio eliminado');
                window.location= '../vista/todolabs.php' </script>";
      //$message = 'Reserva cancelada  correctamente';
    } else {
    	echo "<script> alert('Error al eliminar laboratorio');
                window.location= '../vista/todolabs.php' </script>";
      //$message = 'Error al cancelar reserva';
    }
echo $message;
 ?>

