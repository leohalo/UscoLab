
<?php  
  require 'headerg.php';
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Registrarse</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>

    <?php require 'partials/header.php' ?>

    <?php if(!empty($message)): ?>
      <p> <?= $message ?></p>
    <?php endif; ?>

    <h1>Registrarse</h1>
    <span>O <a href="../vista/login.php">Ingresar</a></span>

    <form action="../controlador/registrar.php" method="POST">
      <input name="email" type="text" placeholder="Digite su correo"  pattern=".{@}" required>
      <input name="password" type="password" placeholder="Digite su contraseña" required>
      <input name="confirm_password" type="password" placeholder="Confirme la contraseña" required>
      <input type="submit" value="Registrar">
    </form>

  </body>
</html>
