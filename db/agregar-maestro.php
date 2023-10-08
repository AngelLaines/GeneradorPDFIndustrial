<?php
session_start();
include "common/common.php";
$conn = (new Common)->connection();

$maestro = $_POST['maestro'];
$error = 1;

if ($conn->connect_errno) {
    $error=1;
} else {

    $sql = "select * from maestros where num_empleado='$maestro[0]'";
    $result = mysqli_fetch_row($conn->query($sql));
    if (!$result) {
        $sql = "insert into maestros values('$maestro[0]','$maestro[1]','$maestro[2]',true)";
    
        $res = $conn->query($sql);
        if($res===true){
            $error = 2;
        } else {
            $error = 3;
        }
    } else {
        $error = 4;
    }
}

echo $error;