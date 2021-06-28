document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    navFixed();
});

function scrollNav() {
        const enlaces = document.querySelectorAll('.navbar-principal');
    
        enlaces.forEach(function(enlace) {
            enlace.addEventListener('click', function(e) {
                e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
};       

function navFixed() {
    const barra = document.querySelector('header');
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo')
        }
        else {
            barra.classList.add('fijo')
        }
    });
    observer.observe(document.querySelector('.sobre-festival'))
}