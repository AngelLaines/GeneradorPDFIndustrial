import { convertType } from "./common/common.js";
import { asignatura, tecnicoAcademico, tiempoCompleto } from "./common/json-teachers.js";
$(document).ready(function () {
    $("#buscar").click(function () {
        let idMaestro = $("#id-prof").val();
        if (idMaestro !== "" || +idMaestro !== NaN) {
            $.post("db/query-maestros.php", { IdMaestro: idMaestro }, function (data) {
                let result = JSON.parse(data);
                console.log(result);
                let listDiv = $("#list");
                $("#name__maestro").text(`Mtro. ${result[1]}`);
                listDiv.empty();
                if (result[result.length - 1] === "tiempo_completo") {
                    listDiv.append("<p>• " + tiempoCompleto.A[result[2]] + "</p>");
                    listDiv.append("<p>• " + tiempoCompleto.B[result[3]] + "</p>");
                    listDiv.append("<p>• " + tiempoCompleto.C[result[4]] + "</p>");
                    listDiv.append("<p>• " + tiempoCompleto.D[result[5]] + "</p>");
                    if (result[6] !== "") {
                        listDiv.append("<p>• " + tiempoCompleto.E[result[6]] + "</p>");
                    }
                    listDiv.append("<p>• " + tiempoCompleto.F[result[7]] + "</p>");
                }
                if (result[result.length - 1] === "tecnico_academico") {
                    listDiv.append("<p>• " + tecnicoAcademico.A[result[2]] + "</p>");
                    listDiv.append("<p>• " + tecnicoAcademico.B[result[3]] + "</p>");
                    listDiv.append("<p>• " + tecnicoAcademico.C[result[4]] + "</p>");
                    listDiv.append("<p>• " + tecnicoAcademico.D[result[5]] + "</p>");
                    if (result[6] !== "") {
                        listDiv.append("<p>• " + tecnicoAcademico.E[result[6]] + "</p>");
                    }
                    listDiv.append("<p>• " + tecnicoAcademico.F[result[7]] + "</p>");
                }
                if (result[result.length - 1] === "asignatura") {
                    listDiv.append("<p>• " + asignatura.A[result[2]] + "</p>");
                    listDiv.append("<p>• " + asignatura.B[result[3]] + "</p>");
                    listDiv.append("<p>• " + asignatura.C[result[4]] + "</p>");
                    listDiv.append("<p>• " + asignatura.D[result[5]] + "</p>");
                    if (result[6] !== "") {
                        listDiv.append("<p>• " + asignatura.E[result[6]] + "</p>");
                    }
                }

                $("#r_maestro").text("Maestro: "+result[1]);
                $("#r_tipo-maestro").text("Tipo de Maestro: "+convertType(result[result.length - 1]));
            });
        } else {
            alert("Ingrese un numero de empleado valido");
        }
    });

    $("#btn-gen-pdf").click(function (e) {
        e.preventDefault();
        //let uri = 'test.pdf#toolbar=0&navpanes=0&scrollbar=0';

        const mode = 'iframe';
        const close = mode==='iframe';
        const options = {
            mode,popClose:close
        }
        console.log(options);
        $("#content").printArea(options);
    });

});
