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
                
                    if (result[result.length-1]==="tiempo_completo") {
                        listDiv.append("<p style='font-size:10px;'>"+tiempoCompleto.A[result[2]]+"</p>");
                        listDiv.append("<p style='font-size:10px;'>"+tiempoCompleto.B[result[3]]+"</p>");
                        listDiv.append("<p style='font-size:10px;'>"+tiempoCompleto.C[result[4]]+"</p>");
                        listDiv.append("<p style='font-size:10px;'>"+tiempoCompleto.D[result[5]]+"</p>");
                        if (result[6]!=="") {
                            listDiv.append("<p style='font-size:10px;'>"+tiempoCompleto.E[result[6]]+"</p>");
                        }
                        listDiv.append("<p style='font-size:10px;'>"+tiempoCompleto.F[result[7]]+"</p>");
                    }
            
                $("#r_maestro").text(result[1]);
                $("#r_tipo-maestro").text(convertType(result[result.length - 1]));
            });
        } else {
            alert("Ingrese un numero de empleado valido");
        }
    });

    $("#btn-gen-pdf").click(async function () {
        window.jsPDF = window.jspdf.jsPDF;
        window.html2canvas = html2canvas;

        let docu = new jsPDF();
        let elementHTML = document.querySelector("#content");

       
        docu.html(elementHTML, {
            margin: [20, 20, 20, 20],
            autoPaging: 'text',
            x: 0,
            y: 0,
            width: 250, //target width in the PDF document
            windowWidth: 675, //window width in CSS pixels
            callback: function (doc) {
                window.open(URL.createObjectURL(doc.output("blob")));
                $("#embed-pdf").attr("src", URL.createObjectURL(doc.output("blob")));
            },
            
        },
        );
    });
}
);

/**
 * https://www.codexworld.com/convert-html-to-pdf-using-javascript-jspdf/
 */