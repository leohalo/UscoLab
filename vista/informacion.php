 

  <?php
  
require '../controlador/database.php';	

$busqueda=$_GET['id_labs'];
$busqueda1=$_GET['id_horario'];


    $sql = $conn->prepare('SELECT * FROM horario WHERE id_horario = :id ');
    $sql->bindParam(':id', $busqueda1);
    $sql->execute();
    $resultado = $sql->fetch(PDO::FETCH_ASSOC);

    $sql2 = $conn->prepare('SELECT * FROM laboratorios WHERE id_lab = :id1 ');
    $sql2->bindParam(':id1', $busqueda);
    $sql2->execute();
    $resultado2 = $sql2->fetch(PDO::FETCH_ASSOC);
   
    $sql1 = $conn->prepare('SELECT * FROM elementos');
    $sql1->execute();
    $resultado1 = $sql1->fetch(PDO::FETCH_ASSOC);
   

$horario = null;
    if (count($resultado) > 0) {
      $horario = $resultado;
    }

$elementos = null; 
    if (count($resultado1) > 0) {
      $elementos = $resultado1;
    }

 $laboratorio = null;
    if (count($resultado2) > 0) {
      $laboratorio = $resultado2;
    }
 
 ?>


 
<div align="center">

        <h1> LABORATORIO <?= $horario['id_lab']; ?></h1>
        <p> Fecha: <?= $horario['fecha']; ?></p>
        <p> Hora: <?= $horario['hora']; ?></p>
        <p> El Laboratotio contiene:  <?= $elementos['detalles']; ?><br />  cantidad : <?= $elementos['cantidad']; ?>  </p>

        <p> El Laboratorio tiene capacidad para:<?= $laboratorio['cupos']; ?></p>
         <a href='reserva2.php'>Volver</a> 
</div>

 </body>
 </html>
