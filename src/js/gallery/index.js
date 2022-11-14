for (let i = 1; i <= 20; i++) {
  document.querySelector(".gallery").insertAdjacentHTML(
    "afterbegin",
    `
      <div class="image lazy-loading">
        <span>
          <img data-src="https://g-m-g-f.github.io/images/assets/m/gallery/image${i}.jpg" alt="Fotografías del colegio Gimnasio Moderno Generación del Futuro" /> 
        </span>
      </div>
    `
  );
}
// Seleccionando todos los elementos requeridos
const $gallery = document.querySelectorAll(".gallery .image"),
  $previewBox = document.querySelector(".preview-box"),
  $previewImg = $previewBox.querySelector("img"),
  $closeIcon = $previewBox.querySelector(".icon"),
  $back = document.querySelector(".back"),
  $currentImg = $previewBox.querySelector(".current-img"),
  $totalImg = $previewBox.querySelector(".total-img"),
  $shadow = document.querySelector(".shadow");
window.onload = () => {
  for (let i = 0; i < $gallery.length; i++) {
    $totalImg.textContent = $gallery.length;
    let clickImgIndex;
    $gallery[i].onclick = () => {
      document.body.classList.add("disable-scroll");
      clickImgIndex = i;
      function preview() {
        $currentImg.textContent = i + 1;
        if (window.innerWidth < 600) {
          $previewImg.src = `https://g-m-g-f.github.io/images/assets/m/gallery/image${
            $gallery.length - i
          }.1.jpg`;
        }
        if (window.innerWidth > 600 && window.innerWidth < 1000) {
          $previewImg.src = `https://g-m-g-f.github.io/images/assets/t/gallery/image${
            $gallery.length - i
          }.1.jpg`;
        }
        if (window.innerWidth > 1000) {
          $previewImg.src = `https://g-m-g-f.github.io/images/assets/d/gallery/image${
            $gallery.length - i
          }.1.jpg`;
        }
      }
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (i === 0) {
        prevBtn.style.visibility = "hidden";
      }
      if (i >= $gallery.length - 1) {
        nextBtn.style.visibility = "hidden";
      }
      prevBtn.onclick = () => {
        i--;
        if (i === 0) {
          preview();
          prevBtn.style.visibility = "hidden";
        } else {
          preview();
          nextBtn.style.visibility = "visible";
        }
      };
      nextBtn.onclick = () => {
        i++;
        if (i >= $gallery.length - 1) {
          preview();
          nextBtn.style.visibility = "hidden";
        } else {
          preview();
          prevBtn.style.visibility = "visible";
        }
      };
      preview();
      $previewBox.classList.add("show-image");
      $shadow.style.display = "block";
      $closeIcon.onclick = () => {
        document.body.classList.remove("disable-scroll");
        i = clickImgIndex;
        prevBtn.style.visibility = "flex";
        nextBtn.style.visibility = "flex";
        $previewBox.classList.remove("show-image");
        $shadow.style.display = "none";
      };
    };
  }
};
