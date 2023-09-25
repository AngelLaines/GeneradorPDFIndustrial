export function getType(tipo){
    const typeTeacher = {
        "Tiempo Completo":"tiempo_completo",
        "Técnico Académico":"tecnico_academico",
        "Asignatura":"asignatura",
    }
    return typeTeacher[tipo];
}