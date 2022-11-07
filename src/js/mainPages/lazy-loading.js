export default function lazyLoad(image) {
  const $images = document.querySelectorAll(image);
  // Saber de qué tamaño está el viewport para añadir al data-src si es tablet /t/ o desktop /d/, o sino es el valor que tiene en el HTML
  function imagesResponsiveDataset() {
    $images.forEach((e) => {
      if (!e.classList.contains("no-responsive")) {
        if (window.innerWidth > 600 && window.innerWidth < 1000)
          e.dataset.src = e.getAttribute("data-src").replace("/m/", "/t/");
        if (window.innerWidth > 1000)
          e.dataset.src = e.getAttribute("data-src").replace("/m/", "/d/");
      }
    });
  }
  imagesResponsiveDataset();
  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target); // Cuando aparezca la imagen ya no se volverá a ejecutar
      }
    });
  }
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });
  $images.forEach((img) => observer.observe(img));
}
