import { popupSection3, popupSection4 } from "./popups.js";
document.addEventListener("DOMContentLoaded", () => {
  popupSection3(
    "welcome-section3-button",
    "section3-popUp",
    "section3-close-popup"
  );
  popupSection4(
    "welcome-section4-button",
    "section4-popUp",
    "section4-close-popup"
  );
});
