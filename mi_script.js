const inputArchivo = document.getElementById('inputArchivo');
const reproductor = document.getElementById('miReproductor');

inputArchivo.addEventListener('change', function() {
    const archivoSeleccionado = inputArchivo.files[0];
    if (archivoSeleccionado) {
        const objectURL = URL.createObjectURL(archivoSeleccionado);
        reproductor.src = objectURL;
    } else {
        // Manejar el caso en el que no se seleccionó ningún archivo
        alert('No se seleccionó ningún archivo.');
    }
});
