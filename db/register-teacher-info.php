<?php
include "common/common.php";
$conn = (new Common)->connection();

$tipo = $_POST["tipo"];
$data = $_POST["data"];
$error = 1;
$res = '';

if ($conn->connect_errno) {
    $error = 1;
} else {
    $verification1 = "select * from tiempo_completo where num_empleado='$data[0]'";
    $result1 = mysqli_fetch_row($conn->query($verification1));
    $verification2 = "select * from tecnico_academico where num_empleado='$data[0]'";
    $result2 = mysqli_fetch_row($conn->query($verification2));
    $verification3 = "select * from asignatura where num_empleado='$data[0]'";
    $result3 = mysqli_fetch_row($conn->query($verification3));
    if (!$result1) {
        if (!$result2) {
            if (!$result3) {
                if ($tipo == "tiempo_completo" || $tipo == "tecnico_academico") {
                    $sql = "insert into $tipo values('$data[0]','$data[1]','$data[2]','$data[3]','$data[4]','$data[5]','$data[6]','$data[7]')";
                    $res = $conn->query($sql);
                    if ($res === true) {
                        $error = 2;
                    } else {
                        $error = 3;
                    }
                } elseif ($tipo == "asignatura") {
                    $sql = "insert into $tipo values('$data[0]','$data[1]','$data[2]','$data[3]','$data[4]','$data[5]','$data[6]')";
                    $res = $conn->query($sql);
                    if ($res === true) {
                        $error = 2;
                    } else {
                        $error = 3;
                    }
                } else {
                    $error = 3;
                }
            } else {
                $error = array("asignatura");
            }
        } else {
            $error = array("tecnico academico");
        }
    } else {
        $error = array("tiempo completo");
    }
}

echo json_encode($error);
