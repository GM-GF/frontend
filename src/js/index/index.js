import htmlHead from "./htmlHead1.js";
import header from "./header1.js";

document.addEventListener("DOMContentLoaded", () => {
  const $header = document.querySelector("header");
  htmlHead();
  if ($header) header("header");
});
