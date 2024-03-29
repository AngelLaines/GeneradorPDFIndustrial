<?php
session_start();
if (!isset($_SESSION['name'])) {
    header('Location:login.html');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generar PDF</title>
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

            <h2 class="text-center profe__heading">Generar PDF Individual</h2>

            <form id="numberForm">
                Id de maestro: <input class="input-text" type="text" name="id profesor" id="id-prof">
                <button class="buttons" type="button" id="buscar">Buscar</button>
                <div id="result">
                    <div class="mt-1">
                        <label for="">Semestre: </label>
                        <select name="" id="semestre"></select>
                    </div>
                    <p id="r_maestro">Maestro: </p>
                    <p id="r_tipo-maestro">Tipo de Maestro: </p>
                </div>
                <button type="button" class="btn__pdf" id="btn-gen-pdf">Generar PDF</button>
            </form>

            <div class="br mt-3 w-60 m-auto">
                <div id="content" class="">
                    <div class="header__logo flex">
                        <div>
                            <img src="build/img/logo2_unison.png" alt="imagen unison" class="pdf__imagen">
                        </div>
                        <div class="text-center">
                            <div>
                                <h2>UNIVERSIDAD DE SONORA</h2>
                            </div>
                            <div class="bt-5">
                                <h3>
                                    Facultad Interdisciplinaria de Ingeniería
                                </h3>
                                <h3>
                                    Departamento de Ingeniería Industrial
                                </h3>
                                <h3>
                                    H. Colegio Departamental
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="text--right">
                        <p id="fecha"></p>
                    </div>
                    <div id="name__maestro" class="mt-3 mb-3"></div>
                    <div>
                        <p id="text-constant1" class="line--height--const text--justify">
                            Por este conducto y en cumplimiento al artículo 146 del Estatuto de Personal Académico, se
                            le informa que después de revisar los documentos correspondientes a su Plan de Trabajo
                            2023-1 y su Informe de Actividades 2023-1, mismos que previamente fueron revisados y
                            evaluados por su presidente de Academia y la Jefatura del Departamento, el H. Colegio
                            Departamental de Ingeniería Industrial en Sesión Ordinaria 005 celebrada el 22 de Septiembre
                            de 2023, dictaminó la evaluación siguiente:
                        </p>
                    </div>
                    <div id="list" class="mt-3 mb-3 list--style">
                        <ul></ul>
                    </div>
                    <div>
                        <p id="text-constant2" class="line--height--const text--justify">
                            Por lo anterior, el H. Colegio Departamental de Ingeniería Industrial lo exhorta a
                            cumplir cabalmente con esta obligación contractual.
                        </p>
                    </div>
                    <div class="text-center mt-5">
                        <p class="line--height">
                            A t e n t a m e n t e
                        </p>
                        <p class="line--height">
                            “El saber de mis hijos hará mi grandeza”
                        </p>
                    </div>
                    <div class="text-center mt-12">
                        <p class="line--height">
                            Dra. Margarita Valenzuela Galván
                        </p>
                        <p class="line--height">
                            Presidente del H. Colegio Departamental de Ingeniería Industrial
                        </p>
                    </div>
                    <div class="mt-3 ">
                        <div>
                            <p class="line--height fs--1-25">C.p. Expediente 1A.1</p>
                        </div>
                        <div class="text-center bt-5 ">
                            <p class=" line--height fs--1-25">
                                Edificio 5 “K” planta baja, Blvd. Luis Encinas Johnson y Rosales, C.P. 83000,
                                Hermosillo, Sonora, México
                            </p>
                            <p class=" line--height fs--1-25">
                                Tel. (662) 259 21 59, Ext. 8159, Fax. (662) 259 21 60. <span class="href">www.industrial.uson.mx</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <footer class="footer-base--leercsv ">
        <div class="footer__container contenedor">

            <div class="footer__imagen-base">
                <h3 class="footer__titulo">Desarrollado por:</h3>
                <img src="build/img/logo_csti.jpeg" alt="logo csti" class="footer__csti">
                <p class="footer__cstitexto">Centro de Servicios de Tecnologías de la Información</p>
            </div>

        </div>

    </footer>

    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="js/jquer.printarea.js"></script>
    <script type="module" src="js/common/dates.js"></script>
    <script type="module" src="js/common/common.js"></script>
    <script type="module" src="js/common/json-teachers.js"></script>
    <script type="module" src="js/gen-pdf-maestro.js"></script>
    <script src="js/common/logout.js"></script>
</body>

</html>