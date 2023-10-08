<?php
session_start();
if (!isset($_SESSION['name'])) {
    header('Location:login.html');
}
?>
<!DOCTYPE html>
<html lang="es-ES">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ver maestros</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="build/css/app.css">
</head>

<body>

    <header class="header ">
        <div class="header__container contenedor">
            <div class="header__logo">
                <img src="build/img/logo2_unison.gif" alt="imagen unison" class="header__imagen--index">
            </div>
            <div class="header__contenido">
                <h1 class="header__heading">Generador PDF</h1>

                <p class="header__texto">Departamento de Ingeniería Industrial</p>
            </div>
            <input type="button" class="formulario__submit-base" value="Cerrar Sesión" id="logout">




        </div>


    </header>

    <div class="dashboard">

        <aside class="menu">



            <h2 class="menu__heading">Menu</h2>


            <nav class="sidebar-nav">
                <a class="nav__link" href="leerCSV.php">Leer CSV</a>
                <a class="nav__link" href="ver-maestros.php">Ver Maestros</a>
                <a class="nav__link" href="agregar-maestro.php">Registrar Maestro</a>
                <a class="nav__link" href="actualizar-maestro.php">Actualizar Maestro</a>
                <a class="nav__link" href="register-teacher-info.php">Evaluar Maestros</a>
                <a class="nav__link" href="gen-pdf-maestro.php">Generar PDF</a>
            </nav>






        </aside>
        <main class="auth contenedor ">


            <h2 class="text-center profe__heading">Ver Maestro</h2>
            <div class="column center">
                <div class="w-80">
                    <table class="table w-100">
                        <thead class="thead__maestro">
    
                            <tr>
                                <th>Número de Empleado</th>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
    
                        </tbody>
    
                    </table>
    
                    <div class="pag">
    
                    </div>
                </div>
            </div>
        </main>
    </div>

    <footer class="footer-base">
        <div class="footer__container contenedor">

            <div class="footer__imagen-base">
                <h3 class="footer__titulo">Desarrollado por:</h3>
                <img src="build/img/logo_csti.jpeg" alt="logo csti" class="footer__csti">
                <p class="footer__cstitexto">Centro de Servicios de Tecnologías de la Información</p>
            </div>

        </div>

    </footer>
    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="js/login.js"></script>
    <script type="module" src="js/common/common.js"></script>
    <script type="module" src="js/ver-maestros.js"></script>
</body>

</html>