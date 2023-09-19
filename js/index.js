$(document).ready(()=>{
    $('#logout').click(function(){
        $.post('./db/logout.php');
        window.location.href = 'login.html'
    });
});