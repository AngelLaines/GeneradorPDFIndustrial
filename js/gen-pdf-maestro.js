import { convertType } from "./common/common.js";
import { days, months } from "./common/dates.js";
import { asignatura, tecnicoAcademico, tiempoCompleto } from "./common/json-teachers.js";
$(document).ready(function () {
    $("#buscar").click(function () {
        let idMaestro = $("#id-prof").val();
        if (idMaestro !== "" || +idMaestro !== NaN) {
            $.post("db/query-maestros.php", { IdMaestro: idMaestro }, function (data) {
                const date = new Date();
                console.log(days[date.getDay()]);
                console.log(months[date.getMonth()]);
                $("#fecha").text(`Hermosillo, Sonora a ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`);

                let result = JSON.parse(data);
                let teacher = `<p class="line--height">PROFESOR ${result[1]}</p>
                <p class="line--height">Departamento de Ingenieria Industrial</p>
                <p class="line--height">P r e s e n t e.-</p>
           `;
                console.log(result);
                let listDiv = $("#list ul");
                listDiv.empty();
                $("#name__maestro").empty();
                if (result[result.length - 1] === "tiempo_completo") {
                    listDiv.append("<li> " + tiempoCompleto.A[result[2]] + "</li>");
                    listDiv.append("<li> " + tiempoCompleto.B[result[3]] + "</li>");
                    listDiv.append("<li> " + tiempoCompleto.C[result[4]] + "</li>");
                    listDiv.append("<li> " + tiempoCompleto.D[result[5]] + "</li>");
                    if (result[6] !== "") {
                        listDiv.append("<li> " + tiempoCompleto.E[result[6]] + "</li>");
                    }
                    listDiv.append("<li> " + tiempoCompleto.F[result[7]] + "</li>");
                }
                if (result[result.length - 1] === "tecnico_academico") {
                    teacher = `<p class="line--height">TECNICO ACADEMICO ${result[1]}</p>
                <p class="line--height">Departamento de Ingenieria Industrial</p>
                <p class="line--height">P r e s e n t e.-</p>
           `;
                    listDiv.append("<li> " + tecnicoAcademico.A[result[2]] + "</li>");
                    listDiv.append("<li> " + tecnicoAcademico.B[result[3]] + "</li>");
                    listDiv.append("<li> " + tecnicoAcademico.C[result[4]] + "</li>");
                    listDiv.append("<li> " + tecnicoAcademico.D[result[5]] + "</li>");
                    if (result[6] !== "") {
                        listDiv.append("<li> " + tecnicoAcademico.E[result[6]] + "</li>");
                    }
                    listDiv.append("<li> " + tecnicoAcademico.F[result[7]] + "</li>");
                }
                if (result[result.length - 1] === "asignatura") {
                    listDiv.append("<li> " + asignatura.A[result[2]] + "</li>");
                    listDiv.append("<li> " + asignatura.B[result[3]] + "</li>");
                    listDiv.append("<li> " + asignatura.C[result[4]] + "</li>");
                    listDiv.append("<li> " + asignatura.D[result[5]] + "</li>");
                    if (result[6] !== "") {
                        listDiv.append("<li> " + asignatura.E[result[6]] + "</li>");
                    }
                }

                $("#name__maestro").append(teacher);

                $("#r_maestro").text("Maestro: " + result[1]);
                $("#r_tipo-maestro").text("Tipo de Maestro: " + convertType(result[result.length - 1]));
            });
        } else {
            alert("Ingrese un numero de empleado valido");
        }
    });

    $("#btn-gen-pdf").click(function (e) {
        e.preventDefault();
        //let uri = 'test.pdf#toolbar=0&navpanes=0&scrollbar=0';

        const mode = 'iframe';
        const close = mode === 'iframe';
        const options = {
            mode, popClose: close
        }
        console.log(options);
        $("#content").printArea(options);
    });

});
