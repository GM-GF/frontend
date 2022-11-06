export default function slider() {
  if (body.classList.contains("index") === true) {
    // Current slide = i, Total slides = s
    let i = 0,
      s = 4;
    const next = document.getElementById("next"),
      prev = document.getElementById("prev"),
      dots = document.querySelectorAll(".navBtns button"),
      images = document.querySelectorAll(".slide");
    const nextSlide = () => {
      document
        .getElementById("slide" + (i + 1))
        .classList.remove("slide-active");
      i = (s + i + 1) % s;
      document.getElementById("slide" + (i + 1)).classList.add("slide-active");
      indicador(i + 1);
      restarSerInterval();
    };
    const prevSlide = () => {
      document
        .getElementById("slide" + (i + 1))
        .classList.remove("slide-active");
      i = (s + i - 1) % s;
      document.getElementById("slide" + (i + 1)).classList.add("slide-active");
      indicador(i + 1);
      restarSerInterval();
    };
    const indicador = (num) => {
      dots.forEach((e) => {
        e.style.backgroundColor = "transparent";
      });
      document.querySelector(
        ".navBtns button:nth-child(" + num + ")"
      ).style.backgroundColor = "#fff";
    };
    const dot = (index) => {
      images.forEach((e) => e.classList.remove("slide-active"));
      document.getElementById("slide" + index).classList.add("slide-active");
      i = index - 1;
      indicador(index);
      restarSerInterval();
    };
    // dots[0].addEventListener('click', () => dot(1)); LA LÍNEA DE ABAJO ES LO MISMO QUE ESTO, PERO ESTÁ GENERADO DINÁMICAMENTE, ES MEJOR
    for (let d = 0; d < 4; d++)
      dots[d].addEventListener("click", () => dot(d + 1));
    // Cada 10s pasa a la siguiente slide
    let automaticSlider = setInterval(() => nextSlide(), 12000);
    // Cuando le de click resetee el setinterval y lo vuelva a inicia desde 0s hasta 10s
    const restarSerInterval = () => {
      clearInterval(automaticSlider);
      automaticSlider = setInterval(() => nextSlide(), 12000);
    };
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
  }
}
