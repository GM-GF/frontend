import { isLoggedIn } from "../isLoggedIn.js";
import { changeTheme, theme } from "../theme.js";

isLoggedIn();

document.addEventListener("DOMContentLoaded", () => {
  theme();
  let interval = setInterval(() => {
    const $mobileHeader = document.querySelector(".m-header");
    const $desktopHeader = document.querySelector(".d-header");
    const $modeBtn = document.getElementById("mode-btn");
    if ($mobileHeader || $desktopHeader) {
      if ($modeBtn) {
        clearInterval(interval);
        changeTheme("mode-btn");
      }
    }
  }, 100);
});
