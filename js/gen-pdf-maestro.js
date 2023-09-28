import { convertType } from "./common/common.js";
import { tiempoCompleto } from "./common/json-teachers.js";
$(document).ready(function () {
    $("#buscar").click(function () {
        let idMaestro = $("#id-prof").val();
        if (idMaestro !== "" || +idMaestro !== NaN) {
            $.post("db/query-maestros.php", { IdMaestro: idMaestro }, function (data) {
                let result = JSON.parse(data);
                console.log(result);
                let listDiv = $("#list");
                listDiv.empty();
                if (result[result.length - 1] === "tiempo_completo") {
                    listDiv.append("<p style='font-size:16px;'>" + tiempoCompleto.A[result[2]] + "</p>");
                    listDiv.append("<p style='font-size:16px;'>" + tiempoCompleto.B[result[3]] + "</p>");
                    listDiv.append("<p style='font-size:16px;'>" + tiempoCompleto.C[result[4]] + "</p>");
                    listDiv.append("<p style='font-size:16px;'>" + tiempoCompleto.D[result[5]] + "</p>");
                    if (result[6] !== "") {
                        listDiv.append("<p style='font-size:16px;'>" + tiempoCompleto.E[result[6]] + "</p>");
                    }
                    listDiv.append("<p style='font-size:16px;'>" + tiempoCompleto.F[result[7]] + "</p>");
                }

                $("#r_maestro").text(result[1]);
                $("#r_tipo-maestro").text(convertType(result[result.length - 1]));
            });
        } else {
            alert("Ingrese un numero de empleado valido");
        }
    });

    $("#btn-gen-pdf").click(function (e) {

        // e.preventDefault();
        // let content = $("#content");
        // let uri = 'test.pdf#toolbar=0&navpanes=0&scrollbar=0';
        const mode = 'iframe';
        const close = mode==='iframe';
        const options = {
            mode,popClose:close
        }
        $("#content").printArea(options);
        
        
    });
});
