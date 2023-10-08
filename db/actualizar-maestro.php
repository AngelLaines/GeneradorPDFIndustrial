<?php
include "common/common.php";
$conn = (new Common)->connection();
$error = 1;

$maestro = $_POST['maestro'];

if ($conn->connect_errno) {
    $error = 1;
} else {
    $sql = "update maestros set nombre_maestro='".$maestro[1]."', tipo_maestro='".$maestro[3]."', isActive=".$maestro[2]." where num_empleado=binary'".$maestro[0]."'";
    $res = $conn->query($sql);
    if ($res===true) {
        $error = 2;
    } else {
        $error = 3;
    }
}

echo json_encode($error);