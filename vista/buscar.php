<?php 
  require 'reserva2.php';
	require '../controlador/database.php';	
	
   ?>

<link rel="stylesheet" href="resources/css/tabla.css">

<br />
<br />

 <table>
  	
	<thead>
	    <tr>
			<th>Hora</th>
			<th>Laboratorio</th>
			<th>Facultad</th>
		<th>Informacion</th>
      <th>Reservar</th>
		</tr>
	</thead>
	
<?php

if (isset($_POST)){  
 $busqueda = ($_POST['fecha']);
 $busqueda1 = ($_POST['Tipolab']);



    $sql = $conn->prepare('SELECT * FROM horario WHERE fecha = :Fecha AND tipo_lab = :Tipo AND estado="libre" ');
    $sql->execute(array('Fecha' => $busqueda,'Tipo' => $busqueda1));

    $resultado = $sql->fetchAll();
    
    		foreach ($resultado as $row){  ?>
		<tr>	
       		<td><?php echo $row['hora'] ?></td>
       		<td><?php echo $row['id_lab'] ?></td>
       		<td><?php echo $row['facultad'] ?></td>
        	<td><?php echo "<a href='informacion.php?id_labs=".$row['id_lab']."&id_horario=".$row['id_horario']."'>Informacion</a>";?></td>
          <td><?php echo "<a href='reserva3.php?id_horario=".$row['id_horario']."'>Reservar</a>"; ?></td>
          
        	
        	


      	</tr>
  <?php

    }

}
?>


</table>

