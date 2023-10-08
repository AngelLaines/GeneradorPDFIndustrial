<?php
include "common/common.php";
$conn = (new Common)->connection();
$error = 1;
if($conn->connect_error){
    $error = 1;
} else {
    $sql = "select distinct(semestre) from tiempo_completo";
    $res = mysqli_fetch_all($conn->query($sql));
    if (count($res)!==0) {
        $error = $res;
    }else {
        $error=2;
    }
}

echo json_encode($error);