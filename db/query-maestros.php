<?php
include "common/common.php";
$conn = (new Common)->connection();
//Trabajito de Gabi, Luisa y Sebitas
$error = 1;
$idMaestro = $_POST['IdMaestro'];
if ($conn->connect_errno) {
    $error = 1;
} else {
    $sql = "select * from tiempo_completo where num_empleado = '" . $idMaestro . "'";
    $rows1 = mysqli_fetch_row($conn->query($sql));



    if ($rows1 === null) {
        $sql = "select * from tecnico_academico where num_empleado = '" . $idMaestro . "'";
        $rows1 = mysqli_fetch_row($conn->query($sql));
        if ($rows1 === null) {
            $sql = "select * from asignatura where num_empleado = '" . $idMaestro . "'";
            $rows1 = mysqli_fetch_row($conn->query($sql));
            if ($rows1 === null) {
                $error = 3;

            } else {
                array_push($rows1, "asignatura");
                $error = $rows1;
            }
        } else {
            array_push($rows1, "tecnico_academico");
            $error = $rows1;
        }
    } else {
        array_push($rows1, "tiempo_completo");
        $error = $rows1;
    }
}

echo json_encode($error);
?>