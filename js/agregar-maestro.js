$(document).ready(function(){
    $("#guardar").click(function(){
        const num_empleado = $("#num-expediente").val();
        const nombre = $("#name").val();
        const tipo = $("input[name='tipo-maestro']:checked").val();

        if (num_empleado==='' || nombre===''||tipo===undefined) {
            alert('Debe rellenar todos los campos correctamente y seleccionar el tipo de maestro');
        }
        else {
            const maestro = [num_empleado,nombre,tipo];
            $.post("db/agregar-maestro.php", {maestro},function (data) {
                    switch (data) {
                        case "1":
                            alert("Error de conexion con la base de datos");
                            break;
                        case "2":
                            alert("Datos guardados correctamente");
                            break;
                        case "3":
                            alert("Error en la consulta");
                            break;
                        case "4":
                            alert(`El maestro con numero de empleado ${num_empleado} ya existe`);
                            break;
                    }
                }
            );
        }

    });
});