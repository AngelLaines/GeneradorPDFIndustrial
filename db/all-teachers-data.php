<?php
include "common/common.php";
$conn = (new Common)->connection();
$data = array();

$error = 1;
if ($conn->connect_errno) {
    $error = 1;
} else {
    $sql = "select * from tiempo_completo";
    $rows1 = mysqli_fetch_all($conn->query($sql));
    if ($rows1 === null) {
        $error = 3;
    } else {

        array_push($data, $rows1);

        $sql = "select * from tecnico_academico";
        $rows2 = mysqli_fetch_all($conn->query($sql));
        if ($rows2 === null) {
            $error = 3;
        } else {

            array_push($data, $rows2);

            $sql = "select * from asignatura";
            $rows3 = mysqli_fetch_all($conn->query($sql));
            if ($rows3 === null) {
                $error = 3;
            } else {

                array_push($data, $rows3);

                $error = $data;
            }
        }
    }
}

echo json_encode($error);
?>