import imagesResponsive from "./images-responsive.js";
import lazyLoad from "./lazy-loading.js";
import scrollAnimation from "./scrollAnimation.js";

document.addEventListener("DOMContentLoaded", () => {
  imagesResponsive();
  scrollAnimation(".animate");
  lazyLoad(".lazy-loading img");
});
