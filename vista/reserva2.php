<?php
  session_start();
  require '../controlador/database.php';

  if (isset($_SESSION['user_id'])) {
    $records = $conn->prepare('SELECT id_usu, email, password FROM users WHERE id_usu = :id_usu');
    $records->bindParam(':id_usu', $_SESSION['user_id']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);
    $user = null;
    if (count($results) > 0) {
      $user = $results;
    }
  }

?>

 <style>
   body
   {
    margin:0;
    padding:0;
    background-color:#f1f1f1;
   }
   .box
   {
    width:1270px;
    padding:20px;
    background-color:#fff;
    border:1px solid #ccc;
    border-radius:5px;
    margin-top:25px;
   }
  </style>
<link rel="stylesheet" href="assets/css/style.css">

<?php require 'header1.php' ?>

 <?php if(!empty($user)): ?>
      
       <body>
  	<DIV align="right" >
  	 <a href="../controlador/logout.php">
       <font color=#f1f1f1> Cerrar sesion</font>
      </a>
  </DIV>




 <div class="container box">
    
    <div class="table-responsive"  style="overflow-x: hidden;">
    <br />
    <form action="buscar.php" method="POST">
    <div class="row">
     <div class="input-daterange">
      <div class="col-md-4">
      	<label>Fecha Deseada:</label>
       <input type="text" name="fecha" id="start_date" class="form-control" />
      </div>
        
     </div>

    
                <!-- <input type="menu" name="Tipolab" id="j_password" />-->
                <div class="col-md-4">
                	 <label>Tipo De Laboratorio:</label>
                	 <br />
                	 <br />
                <select name="Tipolab" id="start_date" class="form-control" >
                	 <option>Laboratorio de Quimica </option>

                     <option>Laboratorio de Microbiologia</option>

                     <option>Laboratorio de Anatomia</option>
                </select>
                </div>
     <div class="col-md-4">
     	 <br />
     	  <br />

      <input type="submit" name="buscar" id="search" value="Buscar" class="btn btn-info active" />
     </div>
    </div>
</form>
    <br />

    <!--
    <table id="order_data" class="table  table-striped  table-hover">
     <thead>
      <tr>
       <th>Orden ID</th>
       <th>Documento</th>
       <th>Cliente</th>
       <th>Producto</th>
       <th>Precio</th>
       <th>Iva</th>
       <th>Estado</th>
       <th>Fecha</th>
      </tr>
     </thead>
    </table>
    -->
   </div>
  </div>






      

  <div id="cuerpo">
    <?php else: ?>
      <h1>Ingresar </h1>
      <a href="login.php">Click Aqui</a> 
    </div>  
    <?php endif; ?>




  <script src="bootstrap-3.3.7/js/jQuery-2.1.4.min.js"></script>
<script src="bootstrap-3.3.7/js/bootstrap.min.js"></script>
  <script src="plugins/datepicker/bootstrap-datepicker.js"></script>
    <script src="plugins/datatables/jquery.dataTables.js" type="text/javascript"></script>
    <script src="plugins/datatables/dataTables.bootstrap.js" type="text/javascript"></script>

 </body>
</html>

   


<script type="text/javascript" language="javascript" >
 
 
 
$(document).ready(function(){
 
 
 
 
 $('.input-daterange').datepicker({
    "locale": {
                "separator": " - ",
        "applyLabel": "Aplicar",
        "cancelLabel": "Cancelar",
        "fromLabel": "Desde",
        "toLabel": "Hasta",
        "customRangeLabel": "Custom",
        "daysOfWeek": [
            "Do",
            "Lu",
            "Ma",
            "Mi",
            "Ju",
            "Vi",
            "Sa"
        ],
        "monthNames": [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ],
        "firstDay": 1
    },
  
  format: "yyyy-mm-dd",
  autoclose: true
 
 });
 
 

 

});
</script>