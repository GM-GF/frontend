// Estas son imágenes que aparecen de primeras entonces no son Lazy Loading, lo que hace este JS es descargar de si es mobile, tablet o desktop, ya que en el HTML si se pone el src normal que siempre inica en mobile y está en desktop va a descargar el tamaño de mobile y el desktop, esto no proporcina un buen rendimiento para eso el data-src
export default function imagesResponsive() {
  const $img = document.querySelectorAll(".responsive");
  // Mejorando el rendimiento de carga cuando el usuario abre la página de inicio.
  // Primero se descargan la 1 primer imagen después de 0.5s se descarga la segunda imagen, después de 1s se descargan las 2 imágenes restantes.
  function slidesIndex() {
    const $images = document.querySelectorAll(".slide img");
    setTimeout(() => {
      for (let i = 0; i < 1; i++) {
        $images[i].src = $images[i].dataset.src;
      }
      setTimeout(() => {
        for (let i = 1; i <= 1; i++) {
          $images[i].src = $images[i].dataset.src;
        }
        setTimeout(() => {
          for (let i = 2; i <= 3; i++) {
            $images[i].src = $images[i].dataset.src;
          }
        }, 500);
      }, 500);
    });
  }
  function imagesSrc() {
    $img.forEach((e) => {
      if (window.innerWidth < 600) {
        if (e.getAttribute("data-src").indexOf("/t/"))
          e.dataset.src = e.getAttribute("data-src").replace("/t/", "/m/");
        if (body.classList.contains("index")) {
          slidesIndex();
        } else {
          e.src = e.dataset.src;
        }
      }
      if (window.innerWidth > 600) {
        if (e.getAttribute("data-src").indexOf("/m/"))
          e.dataset.src = e.getAttribute("data-src").replace("/m/", "/t/");
        if (e.getAttribute("data-src").indexOf("/d/"))
          e.dataset.src = e.getAttribute("data-src").replace("/d/", "/t/");
        if (body.classList.contains("index")) {
          slidesIndex();
        } else {
          e.src = e.dataset.src;
        }
      }
      if (window.innerWidth > 1000) {
        if (e.getAttribute("data-src").indexOf("/t/"))
          e.dataset.src = e.getAttribute("data-src").replace("/t/", "/d/");
        if (body.classList.contains("index")) {
          slidesIndex();
        } else {
          e.src = e.dataset.src;
        }
      }
    });
  }
  imagesSrc();
}
