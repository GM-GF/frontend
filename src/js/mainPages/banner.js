document.body.insertAdjacentHTML(
  "afterbegin",
  `
    <section id="banner">
      <div class="banner-text">
        <h1 class="text1">GIMNASIO MODERNO</h1>
        <h1 class="text2">GENERACIÓN DEL FUTURO</h1>
      </div>
      <div class="banner-loader">
        <div class="banner-loader-container">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="0" fill="none" stroke="#ffffff" stroke-width="4">
              <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/>
              <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/>
            </circle><circle cx="50" cy="50" r="0" fill="none" stroke="#ffffff" stroke-width="4">
              <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"/>
              <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"/>
            </circle>
          </svg>
        </div>
      </div>
    </section>
    `
);