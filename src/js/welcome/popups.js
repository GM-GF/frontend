import lazyLoad from "../mainPages/lazy-loading.js";

const loader = (color) => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 120 30" style="enable-background:new 0 0 120 30;" xml:space="preserve">
      <style type="text/css">
        .popUp-loader .st0{fill:${color} !important;}
        .popUp-loader .st1{fill:${color} !important;fill-opacity:0.3;}
      </style>
      <circle class="st0" cx="15" cy="15" r="15">
        <animate accumulate="none" additive="replace" attributeName="r" begin="0s" calcMode="linear" dur="0.8s" fill="remove" from="15" repeatCount="indefinite" restart="always" to="15" values="15;9;15"></animate>
        <animate accumulate="none" additive="replace" attributeName="fill-opacity" begin="0s" calcMode="linear" dur="0.8s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="1" values="1;.5;1"></animate>
      </circle>
      <circle class="st1" cx="60" cy="15" r="9">
        <animate accumulate="none" additive="replace" attributeName="r" begin="0s" calcMode="linear" dur="0.8s" fill="remove" from="9" repeatCount="indefinite" restart="always" to="9" values="9;15;9"></animate>
        <animate accumulate="none" additive="replace" attributeName="fill-opacity" begin="0s" calcMode="linear" dur="0.8s" fill="remove" from="0.5" repeatCount="indefinite" restart="always" to="0.5" values=".5;1;.5"></animate>
      </circle>
      <circle class="st0" cx="105" cy="15" r="15">
        <animate accumulate="none" additive="replace" attributeName="r" begin="0s" calcMode="linear" dur="0.8s" fill="remove" from="15" repeatCount="indefinite" restart="always" to="15" values="15;9;15"></animate>
        <animate accumulate="none" additive="replace" attributeName="fill-opacity" begin="0s" calcMode="linear" dur="0.8s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="1" values="1;.5;1"></animate>
      </circle>
    </svg>
  `;
};

export function popupSection3(openBtn, container, closeBtn) {
  const $openBtn = document.getElementById(openBtn);
  const $containerPopup = document.getElementById(container);
  const content = () => {
    return `
    <div class="container-content-popUp">
      <div class="content-popUp">
        <div class="popUp-loader" id="section3-popUp-loader">
          ${loader("#FAA930")}
        </div>
        <div class="popUp-iconClose">
          <button id="section3-close-popup" aria-label="Cerrar ventana emergente.">
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
          <div class="popup-images">
            <div class="image lazy-loading">
              <img data-src="https://g-m-g-f.github.io/images/assets/m/welcome/laboratory.jpg" alt="Laboratorio de química" />
              <div class="text">
                <h3>Laboratorio de química</h3>
              </div>
            </div>
            <div class="image lazy-loading">
              <img data-src="https://g-m-g-f.github.io/images/assets/m/welcome/green-area.jpg" alt="Zona verde" />
              <div class="text">
                <h3>Zona verde</h3>
              </div>
            </div>
            <div class="image lazy-loading">
              <img data-src="https://g-m-g-f.github.io/images/assets/m/welcome/arts-room.jpg" alt="Salón de artes" />
              <div class="text">
                <h3>Salón de artes</h3>
              </div>
            </div>
            <div class="image lazy-loading">
              <img data-src="https://g-m-g-f.github.io/images/assets/m/welcome/laboratory.jpg" alt="Laboratorio de química" />
              <div class="text">
                <h3>Laboratorio de química</h3>
              </div>
            </div>
            <div class="image lazy-loading">
              <img data-src="https://g-m-g-f.github.io/images/assets/m/welcome/green-area.jpg" alt="Zona verde" />
              <div class="text">
                <h3>Zona verde</h3>
              </div>
            </div>
            <div class="image lazy-loading">
              <img data-src="https://g-m-g-f.github.io/images/assets/m/welcome/arts-room.jpg" alt="Salón de artes" />
              <div class="text">
                <h3>Salón de artes</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  };
  $openBtn.addEventListener("click", () => {
    // Insertar HTML del contenido del PopUp por primera vez
    if (!$containerPopup.classList.contains("loaded"))
      $containerPopup.innerHTML = content();
    $containerPopup.classList.add("loaded");
    // Detectar el ancho de la ventana para descargar la imagen adecuada, es decir, si es una imagen para mobile, tablet o desktop.
    // También al hacer scroll y detectar la imagen se descargará para obetener un mejor rendimiento
    const $closePopUp = document.getElementById(closeBtn);
    const $loader = document.getElementById("section3-popUp-loader");
    const $images = document.querySelectorAll(
      ".container-content-popUp .popup-images img"
    );
    let interval = setInterval(() => {
      if ($images.length > 5) {
        clearInterval(interval);
        lazyLoad(".lazy-loading img");
      }
    }, 200);
    // Cancelar el scroll del contenido que está debajo.
    document.body.classList.add("disable-scroll");
    $containerPopup.classList.add("active-popUp");
    // Si el contenido ya está cargado que el loader dure 3s
    if (navigator.onLine) {
      let interval = setInterval(() => {
        if (document.readyState == "complete") {
          clearInterval(interval);
          setTimeout(() => {
            $loader.classList.add("hide-loader");
            setTimeout(() => ($loader.style.display = "none"));
          }, 1000);
        }
      });
    } else $loader.classList.remove("hide-loader");
    // Cuando le de en el botón de cerrar
    $closePopUp.addEventListener("click", () => {
      document.body.classList.remove("disable-scroll");
      $containerPopup.classList.remove("active-popUp");
    });
  });
}

export function popupSection4(openBtn, container, closeBtn) {
  const $openBtn = document.getElementById(openBtn);
  const $containerPopup = document.getElementById(container);
  const content = () => {
    return `
      <div class="container-content-popUp">
        <div class="content-popUp">
          <div class="popUp-loader" id="section4-popUp-loader">
            ${loader("#F35C5C")}
          </div>
          <div class="popUp-iconClose">
            <button id="section4-close-popup" aria-label="Cerrar ventana emergente.">
              <i class="fa-solid fa-circle-xmark"></i>
            </button>
          </div>
          <div class="maps">
            <div class="maps-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0720681359007!2d-74.09819689999999!3d4.7574912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8442d1946715%3A0x52ca9e14f91c69b0!2sGimnasio%20Moderno%20Generaci%C3%B3n%20del%20Futuro!5e0!3m2!1ses!2sco!4v1668096345109!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="maps-text">
              <h3>Conoce nuestra ubicación</h3>
              <p>A través de este servicio podrás encontrar la ubicación precisa del colegio Gimnasio Moderno Generación del Futuro.</p>
              <a href="https://maps.app.goo.gl/8JMnz4xNHoBGAgyH8" target="about_blank" rel="noopener noreferrer">Ver en Google Maps</a>
            </div>
          </div>
        </div>
      </div>
    `;
  };
  $openBtn.addEventListener("click", () => {
    // Insertar HTML del contenido del PopUp
    if (!$containerPopup.classList.contains("loaded"))
      $containerPopup.innerHTML = content();
    $containerPopup.classList.add("loaded");
    const $closePopUp = document.getElementById(closeBtn);
    const $loader = document.getElementById("section4-popUp-loader");
    // Cancelar el scroll del contenido que está debajo.
    document.body.classList.add("disable-scroll");
    $containerPopup.classList.add("active-popUp");
    // Si el contenido ya está cargado que el loader dure 3s
    if (navigator.onLine) {
      let interval = setInterval(() => {
        if (document.readyState == "complete") {
          clearInterval(interval);
          setTimeout(() => {
            $loader.classList.add("hide-loader");
            setTimeout(() => ($loader.style.display = "none"));
          }, 2500);
        } else $loader.classList.remove("hide-loader");
      });
    } else $loader.classList.remove("hide-loader");
    // Cuando le de en el botón de cerrar
    $closePopUp.addEventListener("click", () => {
      document.body.classList.remove("disable-scroll");
      $containerPopup.classList.remove("active-popUp");
    });
  });
}
