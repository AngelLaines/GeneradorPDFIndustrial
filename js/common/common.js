export function getType(tipo){
    const typeTeacher = {
        "Tiempo Completo":"tiempo_completo",
        "Técnico Académico":"tecnico_academico",
        "Asignatura":"asignatura",
    }
    return typeTeacher[tipo];
}

export function logout(){
    $.post("db/logout.php");
    window.location.href = "./login.html"
}