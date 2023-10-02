<?php
include "common/common.php";
$conn = (new Common)->connection();

$tipo = $_POST["tipo"];
$data = $_POST["data"];
$error = 1;

if($conn->connect_errno){
    $error = 1;
}else{
    if($tipo=="tiempo_completo"||$tipo=="tecnico_academico"){
        $sql= "insert into $tipo values('$data[0]','$data[1]','$data[2]','$data[3]','$data[4]','$data[5]','$data[6]','$data[7]')";
        $conn->query($sql);
        $error = 2;
    }elseif($tipo=="asignatura"){
        $sql= "insert into $tipo values('$data[0]','$data[1]','$data[2]','$data[3]','$data[4]','$data[5]','$data[6]')";
        $conn->query($sql);
        $error = 2;
    }else{
    $error = 3;
    }   
}

echo $error;