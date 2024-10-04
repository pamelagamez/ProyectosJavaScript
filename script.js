function tirarDado() {
    const caras = parseInt(document.getElementById('num-caras').value);

    // Comprobar que el número de caras sea válido
    if (isNaN(caras) || caras < 1) {
        document.getElementById('resultado-dado').innerHTML = 'Error: Introduce un número válido de caras.';
        return;
    }

    // Generar un número aleatorio entre 1 y el número de caras
    const resultado = Math.floor(Math.random() * caras) + 1;
    document.getElementById('resultado-dado').innerHTML = `Resultado: ${resultado}`;
}

