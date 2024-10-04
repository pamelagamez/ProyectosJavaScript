document.getElementById('sugerenciaFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener valores de la edad y el tipo
    const edad = parseInt(document.getElementById('edad').value);
    const tipo = document.getElementById('tipo').value;
    let sugerencia = '';

    // Sugerencias basadas en la edad y el tipo
    switch (tipo) {
        case 'accion':
            sugerencia = edad < 18 ? 'Te sugerimos "Los Increíbles".' : 'Te sugerimos "Mad Max: Fury Road".';
            break;
        case 'comedia':
            sugerencia = edad < 18 ? 'Te sugerimos "Los Goonies".' : 'Te sugerimos "Superbad".';
            break;
        case 'drama':
            sugerencia = edad < 18 ? 'Te sugerimos "El Rey León".' : 'Te sugerimos "La La Land".';
            break;
        case 'terror':
            sugerencia = edad < 18 ? 'Te sugerimos "Scooby-Doo".' : 'Te sugerimos "El Conjuro".';
            break;
        case 'musica':
            sugerencia = edad < 18 ? 'Te sugerimos "High School Musical".' : 'Te sugerimos "Bohemian Rhapsody".';
            break;
        default:
            sugerencia = 'Por favor, selecciona un tipo válido.';
    }

    // Mostrar la sugerencia
    const resultadoElemento = document.getElementById('sugerenciaResultado');
    resultadoElemento.innerHTML = sugerencia;
});

