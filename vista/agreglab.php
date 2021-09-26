<?php
  require 'header.php';
?>
<!DOCTYPE html>
<br>
<html>
  <head>
    <meta charset="utf-8">
    <title>Registrar Laboratorio</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <?php if(!empty($message)): ?>
      <p> <?= $message ?></p>
    <?php endif; ?>
    <h1>Registrar Laboratorio</h1>
    <form action="../controlador/agregarlab.php" method="POST">
      <input name="id_lab" type="number" placeholder="Digite numero del salon" required pattern="[0-9]{10}" style="WIDTH: 300px; HEIGHT: 60px" size=32>
      <p>Elementos:
        <div style="WIDTH: 300pxHEIGHT: 60px" size="32">
        <select name="id_ele" required>
          <option value="0" >Seleccione:</option>
        <?php
        $conexion = mysqli_connect("localhost", "root", "", "php_login_database");    
        $sql = "SELECT * FROM elementos";
        $query = $conexion -> query ($sql);
      
            while ($valores = mysqli_fetch_array($query)) {
              echo '<option value="'.$valores[id_ele].'">'.$valores[detalles].'</option>';
            }
          ?> 
        </select></div>
        <input name="tipo_lab" type="text" placeholder="Tipo de laboratorio"   pattern="[A-Za-z ]+" required >

        <input name="cupos" type="number" placeholder="Cupos del laboratorio" required pattern="[0-9]{10}" style="WIDTH: 300px; HEIGHT: 60px" size=32>

        <input name="estado" type="text" placeholder="Estado del laboratorio: Eficiente,Malo" required title="Eficiente,Malo" pattern="[A-Za-z]+">
      
        <input type="submit" value="Agregar">
    </form>
    <span><a href="admin.php">Volver</a></span>
    

  </p>
</form>
</body>
</html>

