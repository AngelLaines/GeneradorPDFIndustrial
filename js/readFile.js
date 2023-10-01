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
    console.log("ñ");
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
        // Recorrer las líneas del CSV
        for (let i = 11; i < lineas.length; i++) {
          let valores = lineas[i].split(",");
          valores[valores.length - 1] = valores[valores.length - 1].split('\r').length > 1 ? valores[valores.length - 1].split('\r')[0] : valores[valores.length - 1];
          
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
          header.append("<th>" + dataHeaderArray[i] + "</th>");
        }
        for (let i = 0; i < dataArray.length; i++) {
          //console.log(dataArray[i]);
          let numeroEmpleado = dataArray[i][0];
          let nombreAcademico = dataArray[i][1];

          // Crear una nueva fila en la tabla
          let newRow = $("<tr>");

          for (let j = 2; j < 6; j++) {
            if (dataArray[i][j]==="" || +dataArray[i][j]===NaN) {
              console.log(dataArray[i][j]);
              dataArray[i][j]="0";
              console.log(dataArray[i][j]);
            }
            
          }
          // Data transform

          if ($("#table__tipo option:selected").text() === "Tiempo Completo") {
            if (dataArray[i][6] === "0") {
              dataArray[i][6] = "";
            }
            if (dataArray[i][7] === "") {
              dataArray[i][7] = "0";
            }
          }
          if ($("#table__tipo option:selected").text() === "Técnico Académico") {
            if (dataArray[i][6] === "0") {
              dataArray[i][6] = "";
            }
            if (dataArray[i][7] === "") {
              dataArray[i][7] = "0";
            }
          }
          if ($("#table__tipo option:selected").text() === "Asignatura") {
            if (dataArray[i][6] === "0") {
              dataArray[i][6] = "";
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
          $(".table tbody").append(newRow);
        }

      };

      // Leer el archivo como texto
      lector.readAsText(archivo,"UTF-8");
      console.log(archivo);
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
