// Video index.html section 5
export default function video(video) {
  const $videos = document.querySelectorAll(video);
  function responsiveVideo() {
    $videos.forEach((e) => {
      if (window.innerWidth > 1000) {
        if (e.getAttribute("src").indexOf("/m/"))
          e.src = e.getAttribute("src").replace("/m/", "/d/");
      } else if (e.getAttribute("src").indexOf("/d/"))
        e.src = e.getAttribute("src").replace("/d/", "/m/");
    });
  }
  responsiveVideo();
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
        observer.unobserve(entry.target); // Cuando aparezca el video ya no se volverá a ejecutar
      }
    });
  };
  const observer = new IntersectionObserver(callback, { threshold: 0 });
  $videos.forEach((e) => observer.observe(e));
}
