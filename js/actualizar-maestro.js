$(document).ready(function () {
    // $("input[name='is-active'][value='inactivo']").prop('checked',true);
    $("#buscar").click(function () {
        const numEmpleado = $("#num-expediente").val();
        console.log({ numEmpleado });
        if (numEmpleado !== '') {
            $.post("db/buscar-maestro.php", { numEmpleado },
                function (data) {
                    const result = JSON.parse(data);
                    switch (result) {
                        case 1:
                            alert("Error de conexion con la base de datos");
                            break;
                        case 2:
                            alert(`El maestro con numero de empleado ${numEmpleado} no esta registrado.`);
                            break;

                        default:
                            result[3] = result[3] === '1' ? 'activo' : 'inactivo';
                            console.table(result);

                            $("#name").val(result[1]);
                            $(`input[name='is-active'][value='${result[3]}']`).prop('checked', true);
                            $(`input[name='tipo-maestro'][value='${result[2]}']`).prop('checked', true);
                            $("#guardar").removeAttr('disabled');
                            break;
                    }
                }
            );
        }
    });

    $("#guardar").click(function (e) {
        const numEmpleado = $("#num-expediente").val();
        const nombre = $("#name").val();
        const isActive = $(`input[name='is-active']:checked`).val() === 'activo' ? true : false;
        const tipo = $(`input[name='tipo-maestro']:checked`).val();
        console.log({nombre,isActive,tipo});

        if (nombre!=='' || numEmpleado!=='') {
            $.post("db/actualizar-maestro.php", {maestro:[numEmpleado,nombre,isActive,tipo]},
                function (data) {
                    console.log(data);
                    const result = JSON.parse(data);
                    switch (result) {
                        case 1:
                            alert("Error de conexion con la base de datos");
                            break;
                        case 2:
                            alert("Datos actualizados con exito");
                            break;
                        case 3:
                            alert("Error en la consulta");
                            break;
                    
                    }
                },
            );
        } else {
            alert("Los campos de numero de empleado y nombre de maestro deben estar rellenados");
        }
    });
});