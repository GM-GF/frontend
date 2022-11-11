export default function header(container) {
  const $header = document.querySelector(container);
  $header.innerHTML = `
    <nav class="navbar">
      <a href="./index" class="container-logo" title="Página principal de Gimnasio Moderno Generación del Futuro">
        <img src="https://g-m-g-f.github.io/images/assets/m/menu/school-logo.svg" alt="Logo del colegio Gimnasio Moderno Generación del Futuro" class="school-logo" />
      </a>
      <button id="icon-menu" class="icon-menu" aria-label="Abrir menú de navegación">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="menu-content">
        <li class="menu-item"><a href="./index" class="menu-link">Inicio</a></li>
        <li class="menu-item submenu">
          <a href="javascript:void(0)" class="menu-link">Nosotros<span></span></a>
          <ul class="submenu-nesting">
            <li class="submenu-item"><a href="./filosofia-institucional" class="menu-link submenu-link">Filosofía institucional</a></li>
            <li class="submenu-item"><a href="./perfil-del-estudiante" class="menu-link submenu-link">Perfil del estudiante</a></li>
            <li class="submenu-item"><a href="./himno" class="menu-link submenu-link">Himno</a></li>
          </ul>
        </li>
        <li class="menu-item">
          <a href="./bienvenida" class="menu-link">Bienvenida</a>
        </li>
        <li class="menu-item">
          <a href="./niveles-educativos" class="menu-link">Niveles educativos</a>
        </li>
        <li class="menu-item">
          <a href="./galeria" class="menu-link">Galería</a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">Contáctanos</a>
        </li>
        <li class="menu-item login">
          <a href="./login" class="menu-link">Iniciar sesión</a>
        </li>
      </ul>
    </nav>
  `;
  let interval = setInterval(() => {
    const $iconMenu = document.getElementById("icon-menu");
    const $menuLink = document.querySelectorAll(".menu-link");
    const $submenu = document.querySelectorAll(".navbar .submenu");
    const $menuContent = document.querySelector(".menu-content");
    const $menuArrow = document.querySelectorAll(".navbar .submenu span");
    if ($iconMenu && $menuLink && $submenu && $menuContent && $menuArrow) {
      clearInterval(interval);
      $menuContent.style.transition = "all 0.5s ease";
      $menuArrow.forEach((e) => {
        e.innerHTML = `<i class="fa-solid fa-angle-right"></i>`;
      });
      $iconMenu.addEventListener("click", () => {
        $iconMenu.classList.toggle("active");
        $iconMenu.ariaLabel = "Cerrar menú de navegación";
        $menuContent.classList.toggle("active");
        // Cancelar scroll el contenido general, pero si tendrá scroll en el menú
        (() => {
          var x = window.scrollX;
          var y = window.scrollY;
          window.onscroll = function () {
            window.scrollTo(x, y);
          };
        })();
        if (!$iconMenu.classList.contains("active")) {
          window.onscroll = null;
          $iconMenu.ariaLabel = "Abrir menú de navegación";
          removeActiveLinkAndRotate();
          deleteStyleHeight();
        }
      });
      const click = () => {
        $submenu.forEach((e) => {
          e.addEventListener("click", () => e.classList.toggle("active"));
          e.addEventListener("click", function () {
            const $submenu = this.children[1];
            let height = 0;
            e.classList.toggle("menu-link-active");
            if ($submenu.clientHeight === 0) height = $submenu.scrollHeight;
            $submenu.style.height = `${height}px`;
          });
        });
      };
      const removeActiveLinkAndRotate = () => {
        $submenu.forEach((e) => {
          const $icon = e.children[0].children[0].children[0];
          e.classList.remove("menu-link-active");
          $icon.classList.remove("arrow-rotate");
        });
      };
      const deleteStyleHeight = () => {
        $submenu.forEach((e) => {
          if (e.children[1].getAttribute("style"))
            e.children[1].removeAttribute("style");
        });
      };
      if (window.innerWidth > 1000) {
        deleteStyleHeight();
        if ($menuContent.classList.contains("active"))
          $menuContent.classList.remove("active");
      }
      if (window.innerWidth < 1000) {
        $iconMenu.ariaLabel = "Abrir menú de navegación";
        $iconMenu.classList.remove("active");
        $menuContent.classList.remove("active");
        click();
        deleteStyleHeight();
        removeActiveLinkAndRotate();
      }
      $menuLink.forEach((e) => {
        e.style.transition = "all 0.4s ease";
      });
    }
  }, 200);
}
