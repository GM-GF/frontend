export default function htmlHead() {
  document.querySelector("head").insertAdjacentHTML(
    "beforeend",
    `
      <!-- Styles -->
      <link rel="stylesheet" href="./src/css/header1.css" />
      <link rel="stylesheet" href="./src/css/footer1.css" />
    `
  );
}
