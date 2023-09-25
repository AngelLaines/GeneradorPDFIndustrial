// Realizado por satito el 24/09/23

var pagina=1;
var totalPages=0;
$(document).ready(function(){
    // Codigo temporal, en lo que se consigue hacer las consultas de la base de datos
    var temp = new Array();
    var temp2= [23051,"juanito","Activo"];
    /*var tempNE = 23051;
    var tempNA = "juanito";
    var tempE = "Activo";*/

    for(var i = 0;i<10;i++){
        temp.push(temp2);
    }

    var temp2= [23052,"pedrito","No activo"];
    for(var i = 0;i<10;i++){
        temp.push(temp2);
    }
    var temp2= [23053,"cuatrolitro","Bn pasivo"];
    for(var i = 0;i<41;i++){
        temp.push(temp2);
    }

    // Calcular el total de paginas, para los botones de paginas
    totalPages=setTotalPages(temp);
    //console.log(totalPages);
    setPagesButtons(totalPages);

    // Cargar automaticamente la primera pagina
    cambiarPagina(pagina,temp)

    // Codigo para cambiar la pagina segun boton seleccionado
    var botones = $(".pag button");
    botones.click(function(){
        $(".table tbody").empty();
        botones.removeClass("paginacion activo").addClass("paginacion inactivo");
        if(this.id!=="prev"&&this.id!=="next"){ // Lo que pasa en caso de haber seleccionado un boton de pagina
            $(this).removeClass("paginacion inactivo").addClass("paginacion activo");
            cambiarPagina(this.id, temp);
        }
        else{
            if(this.id==="prev"){ // Lo que pasa cuando seleccionas el boton de pagina anterior
                pagina--;
                $("#"+pagina).removeClass("paginacion inactivo").addClass("paginacion activo");
                cambiarPagina(pagina, temp);
            }
            if(this.id==="next"){ // Lo que pasa cuando seleccionas el boton de pagina siguiente
                pagina++;
                $("#"+pagina).removeClass("paginacion inactivo").addClass("paginacion activo");
                cambiarPagina(pagina, temp);
            }
        }
        //console.log(pagina);
    });
    

    // Lo siguiente lo hizo el sato
    $("#table__tipo").change(function(e){
        const tipo = getType($('#table__tipo option:selected').text());
        $.post('db/type-teacher.php',{tipo},function(data){
            console.log(data);
        });
    });
    // Fin de lo que hizo el sato

});

function cambiarPagina(pag, temp){
    pagina=pag;
    // Desactivacion y activacion de los botones Siguiente y Anterior
    if(pagina==1){
        $("#prev").attr("disabled",true);
    }else if(pagina==totalPages){
        $("#next").attr("disabled",true);
    }else{
        $("#prev").attr("disabled",false);
        $("#next").attr("disabled",false);
    }

    //console.log("cambio a pagina numero "+pagina);
    // Mostrar renglon por renglon lo del arreglo (mas tarde el arreglo sera la query de la base de datos con los datos de los profesores)
    if(temp.length>10){
        for(var i=(0+(10*(pag-1)));i<10*pag;i++){
            if(temp[i]){
                $(".table tbody").append("<tr>");
                $(".table tbody").append("<td class=\"td__maestro\">"+temp[i][0]+"</td>");
                $(".table tbody").append("<td class=\"td__maestro\">"+temp[i][1]+"</td>");
                $(".table tbody").append("<td class=\"td__maestro\">"+temp[i][2]+"</td>");
                $(".table tbody").append("<td class=\"td__maestro\"><button class=\"btn__pdf\">Generar PDF</button></td>");
                $(".table tbody").append("</tr>");
            }
        }
    }else{
        temp.forEach(row => {
            $(".table tbody").append("<tr>");
            $(".table tbody").append("<td class=\"td__maestro\">"+row[0]+"</td>");
            $(".table tbody").append("<td class=\"td__maestro\">"+row[1]+"</td>");
            $(".table tbody").append("<td class=\"td__maestro\">"+row[2]+"</td>");
            $(".table tbody").append("<td class=\"td__maestro\"><button class=\"btn__pdf\">Generar PDF</button></td>");
            $(".table tbody").append("</tr>");
        });
    }
}

function setTotalPages(arreglo){
    // Funcion para calcular cuantas paginas seran (temp sera cambiado despues por un arreglo valido)
    var long=arreglo.length;
    var res=long%10;
    if(res===0){
        return (long/10);
    }
    long = long - res;
    return (long/10)+1;
}

function setPagesButtons(totalPages){
    // Funcion para mostrar los botones segun las paginas requeridas
    $("div.pag").append("<button class=\"paginacion inactivo\" id=\"prev\">Anterior</button>");
    $("div.pag").append("<button class=\"paginacion activo\" id=\""+1+"\">"+1+"</button>");
    for(var i = 2;i<=totalPages;i++){
        $("div.pag").append("<button class=\"paginacion inactivo\" id=\""+i+"\">"+i+"</button>");
    }
    $("div.pag").append("<button class=\"paginacion inactivo\" id=\"next\">Siguiente</button>");
}

// Lo siguiente tambien lo hizo el sato
function getType(tipo){
    const typeTeacher = {
        "Tiempo Completo":"tiempo_completo",
        "Técnico Académico":"tecnico_academico",
        "Asignatura":"asignatura",
    }
    return typeTeacher[tipo];
}
// Fin de lo que hizo el sato