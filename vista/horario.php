<?php
  require 'header.php';
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
<!DOCTYPE html>
<br>
<html>
  <head>
    <meta charset="utf-8">
    <title>Publicar horario Laboratorio</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <div class="row">
    <?php if(!empty($message)): ?>
      <p> <?= $message ?></p>
    <?php endif; ?>
    <h1>Publicar Horario de laboratorio</h1>

<div class="Contenedor-horario">

  <form action="../controlador/agregarhorario.php" method="POST">
        
          <p>Seleccione el salon:
            <div >
              <select name="id_lab" required>
                <option value="">Seleccione:</option>
                <?php
                $conexion = mysqli_connect("localhost", "root", "", "php_login_database");    
                $sql = "SELECT id_lab FROM laboratorios";
                $query = $conexion -> query ($sql);
        
                    while ($valores = mysqli_fetch_array($query)) {
                      echo '<option value="'.$valores[id_lab].'">'.$valores[id_lab].'</option>';
                    }
                  ?>
              </select></div>

        <p>Seleccione el laboratorio:
            <div >
              <select name="tipo_lab" required>
                <option value="">Seleccione:</option>
                <?php
                $conexion = mysqli_connect("localhost", "root", "", "php_login_database");    
                $sql = "SELECT DISTINCT tipo_lab FROM laboratorios";
                $query = $conexion -> query ($sql);
        
                    while ($valores = mysqli_fetch_array($query)) {   
                      echo '<option value="'.$valores[tipo_lab].'">'.$valores[tipo_lab].'</option>';
                    }
                  ?>
              </select></div>
              
          
      <link rel="stylesheet" href="assets/css/style.css">
       <div class="input-daterange">
        <div class="col-md-12" style="margin-top: 10px;">
          <label>Fecha Deseada:</label>
         <input type="text" name="fecha" id="start_date" class="form-control" required>
         
        </div>
       </div>

       <div>
       <input name="hora" type="time" min="06:00" max="21:00" step="60" required> 
        </div>
        

        <div > 
        <input type="text" name="facultad" placeholder="Facultad donde esta el laboratorio" required>
        </div>

        
      <input type="submit" value="Agregar">
      <br>
      <span><a href="admin.php">Volver</a></span>
      </form>
 </div>
</div>

<script src="bootstrap-3.3.7/js/jQuery-2.1.4.min.js"></script>
<script src="bootstrap-3.3.7/js/bootstrap.min.js"></script>
  <script src="plugins/datepicker/bootstrap-datepicker.js"></script>
    <script src="plugins/datatables/jquery.dataTables.js" type="text/javascript"></script>
    <script src="plugins/datatables/dataTables.bootstrap.js" type="text/javascript"></script>



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