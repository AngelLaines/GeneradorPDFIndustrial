<?php 
    class Common
    {
        public function __construct(){
            mysqli_set_charset($this->connection(), 'utf8');
        }
        function connection(){
            return new mysqli("localhost","root","1234","sss_csti");
        }    
    }
?>