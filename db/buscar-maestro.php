<?php
include "common/common.php";
$conn = (new Common)->connection();
$error = 1;
$numEmpleado = $_POST['numEmpleado'];
if ($conn->connect_errno) {
    $error=1;
} else {
    $sql = "select * from maestros where num_empleado='$numEmpleado'";
    $res = mysqli_fetch_row($conn->query($sql));
    if ($res) {
        $error = $res;
    } else {
        $error = 2;
    }
}

echo json_encode($error);