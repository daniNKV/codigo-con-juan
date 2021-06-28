document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i=1 ; i<=12 ; i++) {
    const imagen = document.createElement('img');
    imagen.src = `build/img/thumb/${i}.webp`;
    imagen.dataset.imagenId = i;
    
    imagen.onclick = mostrarImagen;
    
    const lista = document.createElement('li');
    lista.appendChild(imagen);
    galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);
    console.log(id);
    
    //Genera  la imagen
    const imagen = document.createElement('img');
    imagen.src = `build/img/grande/${id}.webp`;
    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Boton para cerrar la imagen
    const cerrarImagen = document.createElement('p');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //Funcionalidad para cerrar 
    cerrarImagen.onclick,
    overlay.onclick = function(e) {
        overlay.remove(e);
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImagen);
    //Mostrar en el html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}