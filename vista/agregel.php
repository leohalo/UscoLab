<?php 
  require 'header.php';
?>  
<!DOCTYPE html>
<br>
<html>
  <head>
    <meta charset="utf-8">
    <title>Registrar elemento</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <?php if(!empty($message)): ?>
      <p> <?= $message ?></p>
    <?php endif; ?>
    <h1>Registrar elemento</h1>
    <form action="../controlador/agregarelemento.php" method="POST">
      <input name="cantidad" type="number" placeholder="Digite la cantidad" required pattern="[0-9]{10}" style="WIDTH: 300px; HEIGHT: 60px" size=32>
      <input name="detalles" type="text" placeholder="Caracterisitca del elemento" required title="Tubo ensayo">
      
      <input type="submit" value="Agregar">
    </form>
    <span><a href="admin.php">Volver</a></span>


  
        
    </p>
  </div>
</body>
 
</html>


  </body>
</html>

