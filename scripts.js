function borrarOperacion() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('operacion').innerHTML = '';
}

function calcular(operador) {
    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);
    let resultado;

    // Valida que se ingresen números
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('operacion').innerHTML = 'Error: Ingrese números válidos';
        return;
    }

    // Realiza la operación según el operador
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('operacion').innerHTML = 'Error: División por cero';
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            document.getElementById('operacion').innerHTML = 'Error: Operador no válido';
            return;
    }

    // Mostrar el resultado
    document.getElementById('operacion').innerHTML = resultado;
}

function calcularRaiz() {
    const num1 = parseFloat(document.getElementById('input1').value);
    if (isNaN(num1) || num1 < 0) {
        document.getElementById('operacion').innerHTML = 'Error: Ingrese un número válido';
        return;
    }
    
    const resultado = Math.sqrt(num1);
    document.getElementById('operacion').innerHTML = resultado;
}

function mostrarResultado() {
}
