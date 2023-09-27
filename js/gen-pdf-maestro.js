import { convertType } from "./common/common.js";
$(document).ready(function () {
    $("#buscar").click(function () {
        let idMaestro = $("#id-prof").val();
        if (idMaestro !== "" || +idMaestro !== NaN) {
            $.post("db/query-maestros.php", { IdMaestro: idMaestro }, function (data) {
                let result = JSON.parse(data);
                console.log(result);
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

        let doc = new jsPDF();
        let elementHTML = await $('#content').html();

        doc.html(elementHTML, {
            callback: function () {
                $("#embed-pdf").attr("src", URL.createObjectURL(doc.output("blob")));
            },
            margin: [10, 10, 10, 10],
            autoPaging: 'text',
            x: 0,
            y: 0,
            width: 190, //target width in the PDF document
            windowWidth: 675 //window width in CSS pixels
        },
        );
    });
}
);

/**
 * https://www.codexworld.com/convert-html-to-pdf-using-javascript-jspdf/
 */