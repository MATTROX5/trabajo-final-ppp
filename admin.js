$(document).ready(function() {
    // Manejar el acceso a la administración
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        const password = $('#password').val();
        if (password === 'admin') { // contraseña
            localStorage.setItem('isAdmin', 'true');
            $('#adminSection').show();
            $('#loginForm').hide();
            cargarTalleres(); // Cargar talleres al acceder
        } else {
            alert('Contraseña incorrecta.');
        }
    });

    // Manejar el envío del formulario de talleres
    $('#newsForm').on('submit', function(event) {
        event.preventDefault(); // Previene el envío predeterminado del formulario
        const titulo = $('#titulo').val();
        const contenido = $('#contenido').val();
        const link = $ ('#link').val();

        // Obtener los talleres existentes del localStorage
        let taller = JSON.parse(localStorage.getItem('taller')) || [];
        
        // Agregar taller
        taller.push({ titulo: titulo, contenido: contenido });
        
        // guarda aller en LocalStorage
        localStorage.setItem('talleres', JSON.stringify(taller));

        //el taller se guarda en talleres.json
        guardarTalleresEnArchivo(taller);

        //se crea el taller
        $('#message').html(`<div class="alert alert-success">taller guardada: <strong>${titulo}</strong></div>`);

    
        $('#titulo').val('');
        $('#contenido').val('');
        $('#link').val('');


        cargarTalleres();
    });


    function cargarTalleres() {
        const talleres = JSON.parse(localStorage.getItem('talleres')) || [];
        $('#existingNewsList').empty();
        talleres.forEach((taller, index) => {
            $('#existingNewsList').append(`
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${raller.titulo}</h5>
                        <p class="card-text">${taller.contenido}</p>
                        <button class="btn btn-danger" onclick="eliminarTaller${index})">Eliminar</button>
                    </div>
                </div>
            `);
        });
    }
noticia
    window.eliminarTaller = function(index) {
        const talleres = JSON.parse(localStorage.getItem('talleres')) || [];
        talleres.splice(index, 1);
        localStorage.setItem('talleres', JSON.stringify(talleres));
        cargarTalleres();
        
        guardarTalleresEnArchivo(talleres);
    };

    function guardarTalleresEnArchivo(talleres) {

        console.log("Talleres guardados en talleres.json:", talleres);
    }
});