$(document).ready(function() {
    // Cargar noticias desde localStorage
    const talleres = JSON.parse(localStorage.getItem('talleres')) || [];
    if (talleres.length > 0) {
        talleres.forEach(function(taller) {
            $('#newsList').append(`
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${taller.titulo}</h5>
                        <p class="card-text">${taller.contenido}</p>
                    </div>
                </div>
            `);
        });
    } else {
        $('#newsList').html('<p>No hay taller disponible.</p>');
    }
});