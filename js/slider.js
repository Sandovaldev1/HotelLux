$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        // Reproducción automática del carrusel
        autoplay: true,
        // Bucle infinito para mostrar las reseñas
        loop: true,
        // Margen entre los elementos del slide
        margen: 20,
        responsive: {

            0: {

                // En pantallas con un ancho de hasta 599 píxeles, se muestra 1 elemento por vez

                items: 1

            },

            600: {

                // En pantallas con un ancho de 600 a 999 píxeles, también se muestra 1 elemento por vez

                items: 1

            },

            1000: {

                // En pantallas con un ancho de 1000 píxeles o más, se muestran 2 elementos por vez

                items: 2

            }

        }
    });
});