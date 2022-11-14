import { theme } from "../theme.js";
import formValidations from "./validations.js";

document.addEventListener("DOMContentLoaded", () => {
  theme();
  formValidations();
  setTimeout(() => {
    document.querySelector(".login-input input").focus();
  }, 500);
});
