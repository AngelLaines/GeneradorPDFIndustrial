<?php
    session_start();
    $conn = new mysqli("localhost","root","1234","sss_csti");

    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $sql = "select * from usuario where usuario = binary'" . $user . "' and contraseña = binary'".$pass."'";
    
    $res = $conn->query($sql);
    $rows = mysqli_fetch_array($res);
    if ($rows===null){
        echo "Usuario y/o contraseña incorrectos";
    } else {
        $_SESSION['user']=$rows[4].' '.$rows[5];
        $_SESSION['type'] = $rows[3];
        echo $_SESSION['user'];
    }
?>