export default function sliderPhilosophy() {
  const $slider = document.getElementById("philosophy-section1-container");
  const $btnRight = document.getElementById("philosophy-slider-next");
  if (window.innerWidth > 1000)
    document
      .querySelector(".philosophy-slider-content")
      .classList.add("philosophy-slider-content1");
  function nextSlide() {
    let $sliderSectionFirst =
      document.querySelectorAll(".philosophy-slider")[0];
    $slider.style.marginInlineStart = "-100%";
    $slider.style.transition = "all 1s ease";
    setTimeout(() => {
      $slider.style.transition = "none";
      $slider.insertAdjacentElement("beforeend", $sliderSectionFirst);
      $slider.style.marginInlineStart = "0%";
    }, 1000);
  }
  let interval = setInterval(() => nextSlide(), 12000);
  $btnRight.addEventListener("click", () => {
    nextSlide();
    clearInterval(interval);
    interval = setInterval(() => nextSlide(), 12000);
  });
}
