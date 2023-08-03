// Fancybox.bind = es una función de fancybox

// que se utiliza para inicializar la funcionalidad del lightbox en los elementos seleccionados

// [data-fancybox="gallery"] es un selector que busca los elementos con el atributo data-fancybox cuyo valor es "gallery"

// estos elementos se considerarán parte de la galería y son llamados en el html
Fancybox.bind('[data-fancybox="gallery"]', {
    contentClick: "iterateZoom",
    Images: {
      Panzoom: {
        maxScale: 2,
      },
    },
    Toolbar: {
        display: {
          left: ["infobar"],
          middle: [
            "zoomIn",
            "zoomOut",
            "toggle1to1",
            "rotateCCW",
            "rotateCW",
            "flipX",
            "flipY",
          ],
          right: ["slideshow", "thumbs", "close"],
        },
      },
      Thumbs: {
        type: "classic",
      },
  });
  


  Fancybox.bind('[data-fancybox="videos"]', {
  });