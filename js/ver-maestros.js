// Realizado por satito el 24/09/23
import { convertType, getType,logout } from "./common/common.js";
let pagina = 1;
let totalPages = 0;
$(document).ready(function () {

    $.post('db/type-teacher.php', {}, function (data) {
        $(".table tbody").empty();
        $(".pag").empty();
        page(JSON.parse(data));
    });
    // Lo siguiente lo hizo el sato
    $("#table__tipo").change(function (e) {
        $.post('db/type-teacher.php', {}, function (data) {
            $(".table tbody").empty();
            $(".pag").empty();
            page(JSON.parse(data));
        });
    });
    // Fin de lo que hizo el sato

    $("#logout").click(function(){
        logout();
    });
});

function cambiarPagina(pag, data) {
    pagina = pag;
    // Desactivacion y activacion de los botones Siguiente y Anterior
    if (pagina == 1) {
        $("#prev").attr("disabled", true);
    } else if (pagina == totalPages) {
        $("#next").attr("disabled", true);
    } else {
        $("#prev").attr("disabled", false);
        $("#next").attr("disabled", false);
    }

    //console.log("cambio a pagina numero "+pagina);
    // Mostrar renglon por renglon lo del arreglo (mas tarde el arreglo sera la query de la base de datos con los datos de los profesores)
    if (data.length > 10) {
        for (let i = (0 + (10 * (pag - 1))); i < 10 * pag; i++) {
            
            if (data[i]) {
                if (data[i][3] === '1') {
                    data[i][3] = "Activo";
                }
                if (data[i][3] === '0') {
                    data[i][3] = "Inactivo";
                }
                $(".table tbody").append("<tr>");
                $(".table tbody").append("<td class=\"td__maestro\">" + data[i][0] + "</td>");
                $(".table tbody").append("<td class=\"td__maestro\">" + data[i][1] + "</td>");
                $(".table tbody").append("<td class=\"td__maestro\">" + convertType(data[i][2]) + "</td>");
                $(".table tbody").append("<td class=\"td__maestro\">" + data[i][3] + "</td>");
                $(".table tbody").append("</tr>");
            }
        }
    } else {
        data.forEach(row => {
            console.log(typeof row[3]);
            
            if (row[3] === '1') {
                row[3] = "Activo";
            }
            if (row[3] === '0') {
                row[3] = "Inactivo";
            }

            $(".table tbody").append("<tr>");
            $(".table tbody").append("<td class=\"td__maestro\">" + row[0] + "</td>");
            $(".table tbody").append("<td class=\"td__maestro\">" + row[1] + "</td>");
            $(".table tbody").append("<td class=\"td__maestro\">" + convertType(row[2]) + "</td>");
            $(".table tbody").append("<td class=\"td__maestro\">" + row[3] + "</td>");
            $(".table tbody").append("</tr>");
        });
    }
}

function setTotalPages(arreglo) {
    // Funcion para calcular cuantas paginas seran (temp sera cambiado despues por un arreglo valido)
    let long = arreglo.length;
    let res = long % 10;
    if (res === 0) {
        return (long / 10);
    }
    long = long - res;
    return (long / 10) + 1;
}

function setPagesButtons(totalPages) {
    // Funcion para mostrar los botones segun las paginas requeridas
    $("div.pag").append("<button class=\"paginacion inactivo\" id=\"prev\">Anterior</button>");
    $("div.pag").append("<button class=\"paginacion activo\" id=\"" + 1 + "\">" + 1 + "</button>");
    for (let i = 2; i <= totalPages; i++) {
        $("div.pag").append("<button class=\"paginacion inactivo\" id=\"" + i + "\">" + i + "</button>");
    }
    $("div.pag").append("<button class=\"paginacion inactivo\" id=\"next\">Siguiente</button>");
}


function page(data){
    totalPages = setTotalPages(data);
    //console.log(totalPages);
    setPagesButtons(totalPages);

    // Cargar automaticamente la primera pagina
    cambiarPagina(pagina, data)

    // Codigo para cambiar la pagina segun boton seleccionado
    let botones = $(".pag button");
    botones.click(function () {
        $(".table tbody").empty();
        botones.removeClass("paginacion activo").addClass("paginacion inactivo");
        if (this.id !== "prev" && this.id !== "next") { // Lo que pasa en caso de haber seleccionado un boton de pagina
            $(this).removeClass("paginacion inactivo").addClass("paginacion activo");
            cambiarPagina(this.id, data);
        }
        else {
            if (this.id === "prev") { // Lo que pasa cuando seleccionas el boton de pagina anterior
                pagina--;
                $("#" + pagina).removeClass("paginacion inactivo").addClass("paginacion activo");
                cambiarPagina(pagina, data);
            }
            if (this.id === "next") { // Lo que pasa cuando seleccionas el boton de pagina siguiente
                pagina++;
                $("#" + pagina).removeClass("paginacion inactivo").addClass("paginacion activo");
                cambiarPagina(pagina, data);
            }
        }
        //console.log(pagina);
    });
}