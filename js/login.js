$(document).ready(()=>{
    $('#login').click(function(){
        const user = $('#user').val();
        const pass = $('#password').val();

        $.post('./db/login.php',{user,pass},function(data){
            if(data!=='Usuario y/o contraseña incorrectos'){
                window.location.href = 'leerCSV.php'
            }
        });
    });
});