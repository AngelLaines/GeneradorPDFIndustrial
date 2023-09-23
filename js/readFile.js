$(document).ready(function () {
  //hacer visible el botoon para leer el archivo
  $("#archivoCSV").change(function () {
    const archivoCSV = $("#archivoCSV");
    const readFile = $("#readFile");

    if (archivoCSV[0].files.length > 0) {
      readFile.css("display", "inline"); // Mostrar el botón si se ha seleccionado un archivo
    } else {
      readFile.css("display", "none"); // Ocultar el botón si no se ha seleccionado un archivo
    }
  });

  $("#readFile").on("click", function () {
    var archivoCSV = document.getElementById("archivoCSV");

    // Verificar si se seleccionó un archivo
    if (archivoCSV.files.length > 0) {
      var archivo = archivoCSV.files[0];
      var lector = new FileReader();

      lector.onload = function (e) {
        var contenido = e.target.result;
        // Dividir el contenido del CSV en líneas
        var lineas = contenido.split("\n");
        var jsonDataArray = [];

        // Recorrer las líneas del CSV
        for (var i = 11; i < lineas.length; i++) {
          var valores = lineas[i].split(",");
          if (valores.length >= 3) {
            var numero = valores[0];
            var nombre = valores[1];
            var evaluacion = valores.slice(2).join(",");

            var profesorData = {
              numero: numero,
              nombre: nombre,
              evaluacion: evaluacion,
            };

            jsonDataArray.push(profesorData);
          }
        }

        // El contenido convertido se encuentra en la variable jsonDataArray
        console.log(jsonDataArray);
      };

      // Leer el archivo como texto
      lector.readAsText(archivo);
    } else {
      alert("Por favor, seleccione un archivo CSV.");
    }
  });
});
