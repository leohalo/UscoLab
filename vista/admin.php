
<?php
   session_start();
    
    if((isset($_SESSION['user_role']) && $_SESSION['user_role'] != "1") || $_SESSION == NULL ){
        header("location: login.php");
    }

    require 'header.php';
	require '../controlador/database.php';
?>
<<style>
    .btn-circle.btn-xl {
        width: 70px;
        height: 70px;
        padding: 10px 16px;
        border-radius: 35px;
        font-size: 24px;
        line-height: 1.33;
    }

    .btn-circle {
        width: 30px;
        height: 30px;
        padding: 6px 0px;
        border-radius: 15px;
        text-align: center;
        font-size: 12px;
        line-height: 1.42857
    }
</style>



</style>


<!DOCTYPE html>
<html>
<body>
    <center style="display: flex !important;display: block;width: 100%; justify-content:center">
        <button type="button" class="pro-de-verda btn btn-primary btn-circle btn-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
        <a href="agregel.php">Elementos</a></button>
        <br>
        <br>
        <button type="button" class="pro-de-verda btn btn-primary btn-circle btn-xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg><a href="agreglab.php">Laboratorios</a></button>
        <br>
        <br>
        <button type="button" class="pro-de-verda btn btn-primary btn-circle btn-xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg><a href="horario.php">Horarios</a></button>
    </center>



</body>
</html>
