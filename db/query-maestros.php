<?php
include "common/common.php";
$conn = (new Common)->connection();
//Trabajito de Gabi, Luisa y Sebitas
$error = 1;
$idMaestro = $_POST['IdMaestro'];
$semestre = $_POST['semestre'];
$json = [];
if ($conn->connect_errno) {
    $error = 1;
} else {
    $sql = "select * from maestros where num_empleado='$idMaestro'";
    $res = mysqli_fetch_row($conn->query($sql));
    
    if ($res) {
        array_push($json,$res[1]);
        $sql = "select * from ".$res[2]." where semestre='$semestre' and num_empleado='$idMaestro'";
        $res2=mysqli_fetch_row($conn->query($sql));
        if($res2){
            for ($i=0; $i < count($res2); $i++) { 
                array_push($json,$res2[$i]);
            }
            array_push($json,$res[2]);
            $error=$json;
        } else {
            $error=2;
        }
    } else {
        $error = 2;
    }
}

echo json_encode($error);
?>