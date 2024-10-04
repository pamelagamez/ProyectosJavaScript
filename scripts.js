document.getElementById('formularioCalculo').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de las notas
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Calcular el promedio
    const promedio = (nota1 + nota2 + nota3) / 3;

    // Verificar si el promedio es igual o mayor a 35
    const resultado = document.getElementById('resultadoPromedio');
    if (promedio >= 35) {
        resultado.innerHTML = `Promedio: ${promedio.toFixed(2)} - Aprobado`;
    } else {
        resultado.innerHTML = `Promedio: ${promedio.toFixed(2)} - Reprobado`;
    }
});
