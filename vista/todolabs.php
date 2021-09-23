<?php 
session_start();
require 'header.php';
require '../controlador/database.php';

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
			
		
      <th>Cancelar Laboratorio</th>
      <!--<th>Editar Laboratorio</th>-->
		</tr>
	</thead>
	
<?php

    $sql = $conn->prepare("SELECT * FROM horario WHERE estado = 'libre'");
    
	$sql->execute();
    $resultado = $sql->fetchAll();
    
    		foreach ($resultado as $row){  ?>
		<tr>	
       		<td><?php echo $row['hora'] ?></td>
       		<td><?php echo $row['fecha'] ?></td>
       		<td><?php echo $row['id_lab'] ?></td>
       		
        	
          <td><?php echo "<a href='../controlador/cancelaradmin.php?id_horario=".$row['id_horario']."'>Eliminar</a>"; ?></td>
          <!--<td><?php echo "<a href='../controlador/editarlab.php?id_horario=".$row['id_horario']."'>Editar</a>"; ?></td>-->
          
        	
        	


      	</tr>
  <?php

    }


?>


</table>

<br />
<center>
<a href='admin.php'>Volver</a>
</center>
</div>