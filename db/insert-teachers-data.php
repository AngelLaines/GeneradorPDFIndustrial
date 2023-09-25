<?php 
include "common/common.php";
$conn = (new Common)->connection();
$data = $_POST['data'];
$type = $_POST['type'];
$error=1;

if($conn->connect_errno){
    $error = 1;
}
else{
    if($type == 'tiempo_completo'){
        for ($i=0; $i < count($data); $i++) { 
            if(count($data[$i])===8){

                $result = $conn->query("select * from tiempo_completo where num_empleado='".$data[$i][0]."'");

                if ($result->num_rows!=1) {
                    $sql = "insert into tiempo_completo values('"
                    .$data[$i][0]."','".$data[$i][1]."','"
                    .$data[$i][2]."','".$data[$i][3]."','"
                    .$data[$i][4]."','".$data[$i][5]."','"
                    .$data[$i][6]."','".$data[$i][7]."')";
    
                    $conn->query($sql);
                }

            }
            if(count($data)-1 == $i){
                $error = 2;
            }
        }
    }
    if($type == 'tecnico_academico'){
        for ($i=0; $i < count($data); $i++) { 
            if(count($data[$i])===8){
                $sql = "insert into tecnico_academico values('"
                .$data[$i][0]."','".$data[$i][1]."','"
                .$data[$i][2]."','".$data[$i][3]."','"
                .$data[$i][4]."','".$data[$i][5]."','"
                .$data[$i][6]."','".$data[$i][7]."')";

                $conn->query($sql);
            }

            if(count($data)-1 == $i){
                $error = 2;
            }
        }
    }
    if($type == 'asignatura'){
        for ($i=0; $i < count($data); $i++) { 
            if(count($data[$i])===7){
                $sql = "insert into asignatura values('"
                .$data[$i][0]."','".$data[$i][1]."','"
                .$data[$i][2]."','".$data[$i][3]."','"
                .$data[$i][4]."','".$data[$i][5]."','"
                .$data[$i][6]."')";

                $conn->query($sql);
            }

            if(count($data)-1 == $i){
                $error = 2;
            }
        }
    }
}

echo $error;
?>