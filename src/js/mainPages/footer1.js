export default function footer() {
  const $footer = document.querySelector("footer");
  $footer.innerHTML = `
    <section class="footer-section1">
      <div class="social-media">
        <a href="#">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
    </section>
    <section class="footer-section2 lazy-loading">
      <div class="footer-section2-content">
        <h2>Contáctanos</h2>
        <p>Dirección: Cra. 114 #152d-6 - Bogotá <a href="https://maps.app.goo.gl/8JMnz4xNHoBGAgyH8" target="about_blank" rel="noopener noreferrer">Google Maps</a></p>
        <p>Tel: (571) 9350028</p>
        <p>Email: <a href="mailto:generaciondelfuturo2020@hotmail.com?subject=Tu%20asunto">generaciondelfuturo2020@hotmail.com</a></p>
      </div>
      <div class="footer-section2-logo">
        <img data-src="https://g-m-g-f.github.io/images/assets/m/footer/school-logo.svg" alt="Logo del colegio Gimnasio Moderno Generación del Futuro" class="no-responsive" />
      </div>
    </section>
    <section class="footer-section3">
      <p>Copyright © 2021 <a href="mailto:davellaneda.ingeniero@gmail.com?subject=Propuesta%20de%20trabajo">David Avellaneda</a></p>
    </section>
  `;
}
