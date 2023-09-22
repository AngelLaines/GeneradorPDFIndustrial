$(document).ready(function () {
    //hacer visible el botoon para leer el archivo
    $('#archivoCSV').change(function () {
        const archivoCSV = $('#archivoCSV');
        const readFile = $('#readFile');

        if (archivoCSV[0].files.length > 0) {
            readFile.css('display', 'inline'); // Mostrar el botón si se ha seleccionado un archivo
        } else {
            readFile.css('display', 'none'); // Ocultar el botón si no se ha seleccionado un archivo
        }
    });

    //ejecucion de lectura con el boton
    $("#readFile").on("click", function () {
        var archivoCSV = document.getElementById("archivoCSV");

        // Verificar si se seleccionó un archivo
        if (archivoCSV.files.length > 0) {
            var archivo = archivoCSV.files[0];
            var lector = new FileReader();

            lector.onload = function (e) {
                var contenido = e.target.result;
                console.log("Contenido: ",contenido)

                // Convertir el contenido CSV a JSON
                var jsonData = csvJSON(contenido);

                // El contenido convertido se encuentra en la variable jsonData
                console.log(jsonData);
            };

            // Leer el archivo como texto
            lector.readAsText(archivo);
        } else {
            alert("Por favor, seleccione un archivo CSV.");
        }
    });


    



}); 
 // Función para convertir CSV a JSON
    function csvJSON(csv) {
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(",");

        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");

            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }

            result.push(obj);
        }

        return JSON.stringify(result);
    }