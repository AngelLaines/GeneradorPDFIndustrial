import { getType,logout } from "./common/common.js";

$(document).ready(function () {


  let dataArray = [];
  let dataHeaderArray = [];


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
    dataArray = [];
    dataHeaderArray = [];
    let archivoCSV = document.getElementById("archivoCSV");

    // Verificar si se seleccionó un archivo
    if (archivoCSV.files.length > 0) {
      let archivo = archivoCSV.files[0];
      let lector = new FileReader();

      lector.onload = function (e) {
        let contenido = e.target.result;
        // Dividir el contenido del CSV en líneas
        let lineas = contenido.split("\n");

        dataHeaderArray = lineas[10].split(',');
        console.log(dataHeaderArray);
        // Recorrer las líneas del CSV
        for (let i = 11; i < lineas.length; i++) {
          let valores = lineas[i].split(",");
          valores[valores.length - 1] = valores[valores.length - 1].split('\r').length > 1 ? valores[valores.length - 1].split('\r')[0] : valores[valores.length - 1];
          console.log(valores);
          if (valores.length >= 3) {
            // let numero = valores[0];
            // let nombre = valores[1];
            // let evaluacion = valores.slice(2).join(",");
            // console.log(evaluacion);
            // let profesorData = {
            //   numero: numero,
            //   nombre: nombre,
            //   evaluacion: evaluacion,
            // };

            dataArray.push(valores);
          }
        }

        // El contenido convertido se encuentra en la variable dataArray

        let header = $("#header-table");
        for (let i = 0; i < dataHeaderArray.length; i++) {
          console.log(dataHeaderArray[i]);
          header.append("<th>" + dataHeaderArray[i] + "</th>");
        }
        for (let i = 0; i < dataArray.length; i++) {
          //console.log(dataArray[i]);
          let numeroEmpleado = dataArray[i][0];
          let nombreAcademico = dataArray[i][1];

          // Crear una nueva fila en la tabla
          let newRow = $("<tr>");

          // Data transform

          if ($("#table__tipo option:selected").text() === "Tiempo Completo") {
            if (dataArray[i][6] === "0") {
              dataArray[i][6] = "";
            }
            if (dataArray[i][7] === "") {
              dataArray[i][7] = "0";
            }
          }

          //

          newRow.append("<td class='td__maestro'>" + numeroEmpleado + "</td>");
          newRow.append("<td class='td__maestro'>" + nombreAcademico + "</td>");
          newRow.append("<td class='td__maestro'>" + dataArray[i][2] + "</td>");
          newRow.append("<td class='td__maestro'>" + dataArray[i][3] + "</td>");
          newRow.append("<td class='td__maestro'>" + dataArray[i][4] + "</td>");
          newRow.append("<td class='td__maestro'>" + dataArray[i][5] + "</td>");
          newRow.append("<td class='td__maestro'>" + dataArray[i][6] + "</td>");

          if (dataArray[i].length === 8) {
            newRow.append("<td class='td__maestro'>" + dataArray[i][7] + "</td>");
          }

          // // Crear un botón "Generar PDF" en la columna correspondiente
          // let pdfButton = $("<button>").text("PDF");
          // pdfButton.addClass("btn__pdf"); // Agregar una clase si es necesario
          // pdfButton.on("click", function () {
          //   // Aquí puedes agregar la lógica para generar el PDF
          //   // Puedes usar la información de la fila actual (dataArray[i])
          // });
          // //newRow.append($("<td class='td__maestro'>").append(pdfButton));

          // Agregar la fila a la tabla
          $(".table tbody").append(newRow);
        }

      };

      // Leer el archivo como texto
      lector.readAsText(archivo);
      $("#saveData").css("display", "inline");
    } else {
      alert("Por favor, seleccione un archivo CSV.");
    }
  });

  $("#saveData").click(function () {
    let type = getType($("#table__tipo option:selected").text());
    $.post("db/insert-teachers-data.php", { data: dataArray, type }, function (data) {
      alert(data);
    });
  });
  $("#logout").click(function () {
    logout();
  });
});
