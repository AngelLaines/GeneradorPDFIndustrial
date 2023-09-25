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
    let archivoCSV = document.getElementById("archivoCSV");

    // Verificar si se seleccionó un archivo
    if (archivoCSV.files.length > 0) {
      let archivo = archivoCSV.files[0];
      let lector = new FileReader();

      lector.onload = function (e) {
        let contenido = e.target.result;
        // Dividir el contenido del CSV en líneas
        let lineas = contenido.split("\n");
        let jsonDataArray = [];

        // Recorrer las líneas del CSV
        for (let i = 11; i < lineas.length; i++) {
          let valores = lineas[i].split(",");
          if (valores.length >= 3) {
            let numero = valores[0];
            let nombre = valores[1];
            let evaluacion = valores.slice(2).join(",").split("\r").length>1 ? valores.slice(2).join(",").split("\r")[0] : valores.slice(2).join(",");
            console.log(evaluacion.split(","));
            let profesorData = {
              numero: numero,
              nombre: nombre,
              evaluacion: evaluacion,
            };

            jsonDataArray.push(profesorData);
          }
        }

        // El contenido convertido se encuentra en la variable jsonDataArray
        console.log(jsonDataArray);

        for (let i = 0; i < jsonDataArray.length; i++) {
          let numeroEmpleado = jsonDataArray[i].numero;
          let nombreAcademico = jsonDataArray[i].nombre;

          // Crear una nueva fila en la tabla
          let newRow = $("<tr>");
          newRow.append("<td class='td__maestro'>" + numeroEmpleado + "</td>");
          newRow.append("<td class='td__maestro'>" + nombreAcademico + "</td>");

          // Crear un botón "Generar PDF" en la columna correspondiente
          let pdfButton = $("<button>").text("PDF");
          pdfButton.addClass("btn__pdf"); // Agregar una clase si es necesario
          pdfButton.on("click", function () {
              // Aquí puedes agregar la lógica para generar el PDF
              // Puedes usar la información de la fila actual (jsonDataArray[i])
          });
          newRow.append($("<td class='td__maestro'>").append(pdfButton));

          // Agregar la fila a la tabla
          $(".table tbody").append(newRow);
      }

      };

      // Leer el archivo como texto
      lector.readAsText(archivo);
    } else {
      alert("Por favor, seleccione un archivo CSV.");
    }
  });
});
