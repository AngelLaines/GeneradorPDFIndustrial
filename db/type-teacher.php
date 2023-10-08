<?php
include "common/common.php";
$conn = (new Common)->connection();
$error = 1;


if ($conn->connect_errno) {
    $error = 1;
} else {
    $sql = "select * from maestros";
    $rows1 = mysqli_fetch_all($conn->query($sql));
    if ($rows1 === null) {
        $error = 3;
    } else {
        $error = $rows1;
    }
}
echo json_encode($error);
?>