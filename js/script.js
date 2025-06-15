document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada correctamente.");

    // Seleccionamos el botón
    const btnHabilidades = document.querySelector('.btn');

    // Añadimos evento click para scroll suave
    btnHabilidades.addEventListener('click', function(event) {
        event.preventDefault(); // evitar salto instantáneo
        const targetId = this.getAttribute('href'); // '#habilidades'
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});