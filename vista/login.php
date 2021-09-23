   <?php
    require '../controlador/database.php';
    
    session_start();

  if (isset($_SESSION['user_id'])) {
    header('Location: reserva2.php');
  }
  require '../controlador/database.php';

  if (!empty($_POST['email']) && !empty($_POST['password'])) {
    $records = $conn->prepare('SELECT id_usu, email, rol_id, password FROM users WHERE email = :email');
    $records->bindParam(':email', $_POST['email']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $message = '';

    if (count($results) > 0 && password_verify($_POST['password'], $results['password'])) {
      $_SESSION['user_id'] = $results['id_usu'];
      $_SESSION['user_role'] = $results['rol_id'];

      if($_SESSION['user_role'] == "1")
      {
        header("Location: admin.php");
      } else {
        header("Location: reserva2.php");
      }

    } else {  

       header('Location: error.php');

    }
  }
?>
    <?php 
    require ("headerg.php");

     ?>

    <?php if(!empty($message)): ?>
      <p> <?= $message ?></p>
    <?php endif; ?>

    
    <div class="corte end"></div>
    
    <div class="main">
        <div class="logueo">
          <h1>Ingresar al Sistema</h1>
          <form action="login.php" method="POST">
              <label>Usuario:</label>
                <input type="text" name="email" id="j_username" placeholder="Digite su Usuario" required/>
              <label>Contraseña:</label>
                <input type="password" name="password" id="j_password" placeholder="Digite su Contraseña" required/>
                <input type="submit" value="Entrar" class="boton acceso" />
        <a href="signup.php"> Registro</a>
            </form>

        </div>
        <div class="corte"></div>
       
        
      <div class="corte end"></div>
        <hr />
      <div class="corte end"></div>
    </div>


    
  </body>
</html>

