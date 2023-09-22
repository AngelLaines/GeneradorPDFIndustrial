<?php 
    class Common
    {
        function connection(){
            return new mysqli("localhost","root","1234","sss_csti");
        }    
    }
?>