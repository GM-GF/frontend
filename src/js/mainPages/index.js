import footer from "./footer1.js";
import header from "./header1.js";
import htmlHead from "./htmlHead1.js";
import imagesResponsive from "./images-responsive.js";
import lazyLoad from "./lazy-loading.js";
import scrollAnimation from "./scrollAnimation.js";

document.addEventListener("DOMContentLoaded", () => {
  const $header = document.querySelector("header");
  const $footer = document.querySelector("footer");
  if ($header) header("header");
  if ($footer) footer();
  htmlHead();
  imagesResponsive();
  scrollAnimation(".animate");
  lazyLoad(".lazy-loading img");
});
