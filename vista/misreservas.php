<?php 
session_start();
require 'header1.php';
require '../controlador/database.php';

$sesion=$_SESSION['user_id'];

 ?>
<link rel="stylesheet" href="resources/css/tabla.css">

<br />
<br />

 <table>
  	
	<thead>
	    <tr>
			<th>Hora</th>
			<th>Fecha</th>
			<th>Laboratorio</th>
			
		
      <th>Cancelar Reserva</th>
		</tr>
	</thead>
	
<?php

    $sql = $conn->prepare("SELECT * FROM reservas WHERE id_usu = '$sesion'");
    
	$sql->execute();
    $resultado = $sql->fetchAll();
    
    		foreach ($resultado as $row){  ?>
		<tr>	
       		<td><?php echo $row['hora'] ?></td>
       		<td><?php echo $row['fecha'] ?></td>
       		<td><?php echo $row['id_lab'] ?></td>
       		
        	
          <td><?php echo "<a href='../controlador/cancelar.php?id_horario=".$row['id_horario']."'>Cancelar</a>"; ?></td>
          
        	
        	


      	</tr>
  <?php

    }


?>


</table>