import footer from "./footer1.js";
import header from "./header1.js";
import imagesResponsive from "./images-responsive.js";
import scrollAnimation from "./scrollAnimation.js";
import lazyLoad from "./lazy-loading.js";

const $body = document.querySelector("body"),
  $containerLoader = document.getElementById("banner");
$body.classList.add("disable-scroll");
let interval = setInterval(() => {
  if (document.readyState == "complete") {
    clearInterval(interval);
    setTimeout(() => {
      $body.classList.remove("disable-scroll");
      $containerLoader.classList.add("banner-hide");
      scrollTo({ top: 0 });
      setTimeout(() => $body.removeChild($containerLoader), 200);
    }, 1000);
  }
}, 500);

document.addEventListener("DOMContentLoaded", () => {
  const $header = document.querySelector("header");
  const $footer = document.querySelector("footer");
  if ($header) header("header");
  if ($footer) footer();
  imagesResponsive();
  scrollAnimation(".animate");
  lazyLoad(".lazy-loading img");
});
