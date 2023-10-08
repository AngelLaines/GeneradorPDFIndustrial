$(document).ready(function () {
    $("#logout").click(function (e) {
        $.post("db/logout.php");
        window.location.href = "./login.html"
    });
});