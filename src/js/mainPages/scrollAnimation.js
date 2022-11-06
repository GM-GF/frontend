import { counter1, counter2, counter3 } from "../index/counters.js";
export default function scrollAnimation(element) {
  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__fadeInUp-active");
        // Contadores del index.html
        if (entry.target.classList.contains("animate-counter1")) counter1();
        if (entry.target.classList.contains("animate-counter2")) counter2();
        if (entry.target.classList.contains("animate-counter3")) counter3();
        observer.unobserve(entry.target); // Cuando aparezca detecte el elemento no se volverá a ejecutar
      }
    });
  }
  const options = { root: null, rootMargin: "0px", threshold: 0.4 };
  const observer = new IntersectionObserver(callback, options);
  document.querySelectorAll(element).forEach((e) => observer.observe(e));
}
