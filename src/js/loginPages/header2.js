export default function header(container, name) {
  const $header = document.querySelector(container, name);
  const $main = document.querySelector("main");

  const mobileHeader = `
    <nav class="navbar">
      <a href="./home" aria-label="Ir a la página de inicio" class="logo">
        <img src="https://g-m-g-f.github.io/images/assets/m/tab-logo.png" alt="Logotipo del colegio Gimnasio Moderno Generación del Futuro" />
      </a>
      <button
        id="icon-menu"
        class="icon-menu"
        aria-label="Abrir menú de navegación"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="container-menu" id="container-menu">
        <ul class="nav-links">
          <li>
            <a href="./home">
              <i class="fa-solid fa-house nav-links-1"></i>
              <span class="link-name">Home</span>
            </a>
          </li>
          <li>
            <a href="./roles">
              <i class="fa-solid fa-user-gear nav-links-1"></i>
              <span class="link-name">Roles</span>
            </a>
          </li>
          <li>
            <a href="./cursos">
              <i class="fa-solid fa-people-roof nav-links-1"></i>
              <span class="link-name">Cursos</span>
            </a>
          </li>
          <li>
            <a href="./asignaturas ">
              <i class="fa-solid fa-book nav-links-1"></i>
              <span class="link-name">Asignaturas</span>
            </a>
          </li><li>
            <a href="./asignaturas ">
              <i class="fa-solid fa-book nav-links-1"></i>
              <span class="link-name">Asignaturas</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-solid fa-users nav-links-1"></i>
              <span class="link-name">Usuarios</span>
            </a>
          </li>
          <div class="container-nav-links-2">
            <li class="profile">
              <a href="./perfil">
                <div class="profile-information">
                  <div class="profile-icon">
                    <i class="fa-solid fa-user"></i>
                  </div>
                  <p>${name}</p>
                </div>
                <div class="profile-arrow">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </a>
            </li>
            <li class="log-out">
              <button id="log-out-btn">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <span>Cerrar sesión</span>
              </button>
            </li>
            <li class="mode">
              <div class="mode-content">
                <div class="mode-text">
                  <i class="fa-regular fa-sun"></i>
                  <p>Modo claro</p>
                </div>
                <div class="mode-btn">
                  <button id="mode-btn"></button>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  `;
  const headerDesktop = `
    <nav>
      <div class="logo-details">
        <div class="logo-image">
          <img 
            src="https://g-m-g-f.github.io/images/assets/m/tab-logo.png" 
            alt="Logotipo del colegio Gimnasio Moderno Generación del Futuro" 
          />
        </div>
        <span class="logo-name">GMGF</span>
        <button id="menu-btn">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <ul class="nav-links">
        <li>
          <a href="./home">
            <i class="fa-solid fa-house"></i>
            <span class="link-name">Home</span>
          </a>
          <ul class="sub-menu blank">
            <li>
              <a href="./home" class="link-name">Home</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="./roles">
            <i class="fa-solid fa-user-gear"></i>
            <span class="link-name">Roles</span>
          </a>
          <ul class="sub-menu blank">
            <li>
              <a href="./roles" class="link-name">Roles</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="./cursos">
            <i class="fa-solid fa-people-roof"></i>
            <span class="link-name">Cursos</span>
          </a>
          <ul class="sub-menu blank">
            <li>
              <a href="./cursos" class="link-name">Cursos</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="./asignaturas">
            <i class="fa-solid fa-book"></i>
            <span class="link-name">Asignaturas</span>
          </a>
          <ul class="sub-menu blank">
            <li>
              <a href="./asignaturas" class="link-name">Asignaturas</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="./usuarios">
            <i class="fa-solid fa-users"></i>
            <span class="link-name">Usuarios</span>
          </a>
          <ul class="sub-menu blank">
            <li>
              <a href="./usuarios" class="link-name">Usuarios</a>
            </li>
          </ul>
        </li>
        <div class="container-nav-links-2">
          <li class="profile">
            <a href="./perfil">
              <i class="fa-solid fa-user"></i>
              <div class="link-name">
                <span class="link-name">${name}</span>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a href="./perfil" class="link-name">Perfil</a>
              </li>
            </ul>
          </li>
          <li class="log-out">
            <button id="log-out-btn">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <span class="link-name">Cerrar sesión</span>
            </button>
          </li>
          <li class="mode">
            <div class="mode-text link-name">
              <i class="fa-regular fa-sun"></i>
              <p>Modo claro</p>
            </div>
            <div class="mode-btn">
              <button id="mode-btn"></button>
            </div>
          </li>
        </div>
      </ul>
    </nav>
  `;
  const mHeader = () => {
    $header.innerHTML = mobileHeader;
    $header.classList.remove("d-header");
    $header.classList.add("m-header");
    $main.classList.add("m-main");
    let interval = setInterval(() => {
      const $openBtn = document.getElementById("icon-menu");
      const $openBtnElements = document.querySelectorAll(".icon-menu *");
      const $menuContainer = document.getElementById("container-menu");
      const $modeBtn = document.getElementById("mode-btn");
      if ($modeBtn) {
        clearInterval(interval);
        $openBtnElements.forEach((e) => (e.style.transition = "all 0.5s ease"));
        $menuContainer.style.transition = "all 0.5s ease";
        $openBtn.addEventListener("click", () => {
          $openBtn.classList.toggle("active-menu");
          $menuContainer.classList.toggle("show-menu");
          document.body.classList.toggle("disable-scroll");
          $openBtn.ariaLabel = "Cerrar menú de navegación";
          if (!$openBtn.classList.contains("active-menu"))
            $openBtn.ariaLabel = "Abrir menú de navegación";
        });
      }
    }, 100);
  };
  const dHeader = () => {
    $header.innerHTML = headerDesktop;
    $header.classList.remove("m-header");
    $header.classList.add("d-header");
    $main.classList.add("d-main");
    const $btnMenu = document.getElementById("menu-btn");
    const $logoName = document.querySelector(".logo-name");
    const $nav = document.querySelector(".nav-links");
    const $listItems = document.querySelectorAll(".nav-links li");
    const $modeBtn = document.getElementById("mode-btn");

    setTimeout(() => {
      $header.style.transition = "all 0.5s ease";
      $logoName.style.transition = "all 0.3s ease";
      $nav.style.transition = "all 0.5 ease";
      $listItems.forEach((e) => (e.style.transition = "all 0.3s ease"));
      $modeBtn.style.transition = "all 0.4s ease";
    }, 300);
    $btnMenu.addEventListener("click", () => $header.classList.toggle("close"));
  };
  document.documentElement.clientWidth < 1000 ? mHeader() : dHeader();
  const $logoutBtn = document.getElementById("log-out-btn");
  $logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("instiId");
    localStorage.removeItem("token");
    window.location.href = "./login";
  });
  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth < 1000) {
      if (!$header.classList.contains("m-header")) mHeader();
    } else {
      if (!$header.classList.contains("d-header")) dHeader();
    }
  });
}
