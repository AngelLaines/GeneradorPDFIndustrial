import { getType, logout } from "./common/common.js";

$(document).ready(function () {
    tipoMaestroChange();
    $("#tipo-maestro").change(function () {
        tipoMaestroChange();
    });
    $("#logout").click(function () {
        logout();
    });
});

$(document).ready(function () {
    $("#guardar").click(function () {
        console.log("object");
        let data = [];
        const tipo = getType($("#tipo-maestro option:selected").text());
        console.log(tipo);
        if (tipo === "tiempo_completo" || tipo === "tecnico_academico") {
            data.push($("#num-expediente").val());
            data.push($("#name"));
            data.push($("input[name='plan-actividades']:checked").val());
            console.log(data);
        } else if (tipo === "asignatura") {

        }
    })
});

function tipoMaestroChange() {
    $("#options").empty();
    const tipo = $("#tipo-maestro option:selected").text();

    if (tipo === "Tiempo Completo" || tipo === "Técnico Académico") {
        $("#options").append(`
        <div>
            <div>
                <p>EL PLAN DE ACTIVIDADES FUE PRESENTADO EN TIEMPO Y FORMA</p>
            </div>
            <div>
                <div class="row v-center"><input type="radio" name="plan-actividades" value="1"><label>1. EL PLAN DE ACTIVIDADES FUE PRESENTADO EN TIEMPO</label><br></div>
                <div class="row v-center"><input type="radio" name="plan-actividades" value="2"><label>2. EL PLAN DE ACTIVIDADES FUE PRESENTADO FUERA DE TIEMPO</label><br></div>
                <div class="row v-center"><input type="radio" name="plan-actividades" value="3"><label>3. NO SE ENCONTRÓ EVIDENCIA DE LA PRESENTACIÓN DEL PLAN DE ACTIVIDADES</label><br></div>
            </div>
        </div>
        <div>
            <div>
                <p>EL INFORME DE ACTIVIDADES DE TRABAJO FUE PRESENTADO EN TIEMPO Y FORMA</p>
            </div>
            <div>
                <div class="row v-center"><input type="radio" name="informe-actividades" value="1"><label>1. EL INFORME DE ACTIVIDADES DE TRABAJO FUE PRESENTADO EN TIEMPO Y FORMA</label><br></div>
                <div class="row v-center"><input type="radio" name="informe-actividades" value="2"><label>2. EL INFORME DE ACTIVIDADES DE TRABAJO FUE PRESENTADO FUERA DE TIEMPO</label><br></div>
                <div class="row v-center"><input type="radio" name="informe-actividades" value="3"><label>3. NO SE ENCONTRÓ EVIDENCIA DE LA PRESENTACIÓN DEL INFORME DE ACTIVIDADES DE TRABAJO</label><br></div>

            </div>
        </div>
        <div>
            <div>
                <p>CONCORDANCIA ENTRE LAS ACTIVIDADES PLANIFICADAS Y LAS ACTIVIDADES REPORTADAS</p>
            </div>
            <div>
                <div class="row v-center"><input type="radio" name="concordancia-actividades" value="0"><label>0. NO SE REPORTARON ACTIVIDADES </label><br></div>
                <div class="row v-center"><input type="radio" name="concordancia-actividades" value="1"><label>1. EXISTE CONCORDANCIA ENTRE LAS ACTIVIDADES PLANIFICADAS Y LAS ACTIVIDADES REPORTADAS</label><br></div>
                <div class="row v-center"><input type="radio" name="concordancia-actividades" value="2"><label>2. SE REPORTAN ACTIVIDADES SIN CONCORDANCIA ENTRE LAS ACTIVIDADES PLANIFICADAS Y LAS ACTIVIDADES REPORTADAS</label><br></div>
                <div class="row v-center"><input type="radio" name="concordancia-actividades" value="3"><label>3. NO HAY CONCORDANCIA ENTRE LAS ACTIVIDADES PLANIFICADAS Y LAS ACTIVIDADES REPORTADAS</label><br></div>

            </div>
        </div>
        <div>
            <div>
                <p>LAS ACTIVIDADES REPORTADAS SON CONGRUENTES CON LA CATEGORÍA Y NIVEL DEL PUESTO</p>
            </div>
            <div>
                <div class="row v-center"><input type="radio" name="actividades-reportadas" value="1"><label>1. LAS ACTIVIDADES REPORTADAS SON CONGRUENTES CON LA CATEGORÍA Y NIVEL DE PUESTO</label><br></div>
                <div class="row v-center"><input type="radio" name="actividades-reportadas" value="2"><label>2. HAY UN ÁREA DE OPORUNIDAD EN LA CONGRUENCIA DE LA CATEGORÍA Y NIVEL DEL PUESTO EN EL ÁREA DE DOCENCIA</label><br></div>
                <div class="row v-center"><input type="radio" name="actividades-reportadas" value="3"><label>3. HAY UN ÁREA DE OPORUNIDAD EN LA CONGRUENCIA DE LA CATEGORÍA Y NIVEL DEL PUESTO EN EL ÁREA DE INVESTIGACIÓN</label><br></div>
                <div class="row v-center"><input type="radio" name="actividades-reportadas" value="4"><label>4. HAY UN ÁREA DE OPORUNIDAD EN LA CONGRUENCIA DE LA CATEGORÍA Y NIVEL DEL PUESTO EN EL ÁREA DE TUTORÍAS A ESTUDIANTES</label><br></div>
                <div class="row v-center"><input type="radio" name="actividades-reportadas" value="5"><label>5. LAS ACTIVIDADES REPORTADAS NO SON CONGRUENTES CON LA CATEGORÍA Y NIVEL DEL PUESTO</label><br></div>
                <div class="row v-center"><input type="radio" name="actividades-reportadas" value="0"><label>0. NO SE REPORTARON ACTIVIDADES </label><br></div>

            </div>
        </div>
        <div>
            <div>
                <p>REALIZACIÓN DE ACTIVIDADES EN CUERPOS COLEGIADOS Y GESTIÓN ACADÉMICA</p>
            </div>
            <div>
                <div class="row v-center"><input type="radio" name="actividades-opcionales" value="1"><label>1. SE REALIZARON ACTIVIDADES EN CUERPOS COLEGIADOS Y GESTIÓN ACADÉMICA</label><br></div>

            </div>
        </div>
        <div>
            <div>
                <p>LAS ACTIVIDADES REPORTADAS ESTÁN SUSTENTADAS CON DOCUMENTACIÓN PROBATORIA</p>
            </div>
            <div>
                <div class="row v-center"><input type="radio" name="actividades-sustentadas" value="1"><label>1. LAS ACTIVIDADES REPORTADAS ESTÁN SUSTENTADAS CON DOCUMENTACIÓN PROBATORIA</label><br></div>
                <div class="row v-center"><input type="radio" name="actividades-sustentadas" value="2"><label>2. FALTA DOCUMENTACIÓN PROBATORIA EN ACTIVIDADES REPORTADAS</label><br></div>
                <div class="row v-center"><input type="radio" name="actividades-sustentadas" value="3"><label>3. LAS ACTIVIDADES REPORTADAS NO ESTÁN SUSTENTADAS CON DOCUMENTACIÓN PROBATORIA</label><br></div>
            </div>
        </div>
        `);
    } else if (tipo === "Asignatura") {
        $("#options").append(`
        <div>
            <div>
                <p>EL PLAN DE ACTIVIDADES FUE PRESENTADO EN TIEMPO Y FORMA</p>
            </div>
            <div>
                <div class="row v-center"><input type="radio" name="plan-actividades" value="1"><label>1. EL PLAN DE ACTIVIDADES FUE PRESENTADO EN TIEMPO</label><br></div>
                <div class="row v-center"><input type="radio" name="plan-actividades" value="2"><label>2. EL PLAN DE ACTIVIDADES FUE PRESENTADO FUERA DE TIEMPO</label><br></div>
                <div class="row v-center"><input type="radio" name="plan-actividades" value="3"><label>3. NO SE ENCONTRÓ EVIDENCIA DE LA PRESENTACIÓN DEL PLAN DE ACTIVIDADES</label><br></div>
            </div>
        </div>
        <div>
            <div>
                <p>EL INFORME DE ACTIVIDADES DE TRABAJO FUE PRESENTADO EN TIEMPO Y FORMA</p>
            </div>
            <div>
                <div class="row v-center"><input type="radio" name="informe-actividades" value="1"><label>1. EL INFORME DE ACTIVIDADES DE TRABAJO FUE PRESENTADO EN TIEMPO Y FORMA</label><br></div>
                <div class="row v-center"><input type="radio" name="informe-actividades" value="2"><label>2. EL INFORME DE ACTIVIDADES DE TRABAJO FUE PRESENTADO FUERA DE TIEMPO</label><br></div>
                <div class="row v-center"><input type="radio" name="informe-actividades" value="3"><label>3. NO SE ENCONTRÓ EVIDENCIA DE LA PRESENTACIÓN DEL INFORME DE ACTIVIDADES DE TRABAJO</label><br></div>

            </div>
        </div>
        <div>
            <div>
                <p>CONCORDANCIA ENTRE LAS ACTIVIDADES PLANIFICADAS Y LAS ACTIVIDADES REPORTADAS</p>
            </div>
            <div>
                <div class="row v-center"><input type="radio" name="concordancia-actividades" value="0"><label>0. NO SE REPORTARON ACTIVIDADES </label><br></div>
                <div class="row v-center"><input type="radio" name="concordancia-actividades" value="1"><label>1. EXISTE CONCORDANCIA ENTRE LAS ACTIVIDADES PLANIFICADAS Y LAS ACTIVIDADES REPORTADAS</label><br></div>
                <div class="row v-center"><input type="radio" name="concordancia-actividades" value="2"><label>2. SE REPORTAN ACTIVIDADES SIN CONCORDANCIA ENTRE LAS ACTIVIDADES PLANIFICADAS Y LAS ACTIVIDADES REPORTADAS</label><br></div>
                <div class="row v-center"><input type="radio" name="concordancia-actividades" value="3"><label>3. NO HAY CONCORDANCIA ENTRE LAS ACTIVIDADES PLANIFICADAS Y LAS ACTIVIDADES REPORTADAS</label><br></div>

            </div>
        </div>
        <div>
            <div>
                <p>CAPTURA DE LA DESCRIPCIÓN DEL DESARROLLO DE LAS MATERIAS DE LA CARGA ACADÉMICA EN LA SECCIÓN DE OBSERVACIONES</p>
            </div>
            <div>
                <div class="row v-center"><input type="radio" name="descripcion-desarrollo" value="1"><label>1. SE REALIZÓ LA CAPTURA DE LA DESCRIPCIÓN DEL DESARROLLO DE LAS MATERIAS DE LA CARGA ACADÉMICA EN LA SECCIÓN DE OBSERVACIONES</label><br></div>
                <div class="row v-center"><input type="radio" name="descripcion-desarrollo" value="2"><label>2. SE REALIZÓ DE MANERA INCOMPLETA LA CAPTURA DE LA DESCRIPCIÓN DEL DESARROLLO DE LAS MATERIAS DE LA CARGA ACADÉMICA EN LA SECCIÓN DE OBSERVACIONES</label><br></div>
                <div class="row v-center"><input type="radio" name="descripcion-desarrollo" value="3"><label>3. NO REALIZÓ LA CAPTURA DE LA DESCRIPCIÓN DEL DESARROLLO DE LAS MATERIAS DE LA CARGA ACADÉMICA EN LA SECCIÓN DE OBSERVACIONES</label><br></div>

            </div>
        </div>
        <div>
            <div>
                <p>REALIZACIÓN DE ACTIVIDADES EN CUERPOS COLEGIADOS Y GESTIÓN ACADÉMICA</p>
            </div>
            <div>
                <div class="row v-center"><input type="radio" name="actividades-extraordinarias" value="1"><label>1. SE REALIZARON ACTIVIDADES EXTRAORDINARIAS A LAS OBLIGATORIAS</label><br></div>

            </div>
        </div>
        `);
    }
}