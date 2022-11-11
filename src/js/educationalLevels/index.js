document.addEventListener("DOMContentLoaded", () => {
  const $body = document.body;
  const popup = (container, textContent, nameImage, altImage, idReturnBtn) => {
    const $container = document.getElementById(container);
    if (!$container.classList.contains("loaded")) {
      document.getElementById(container).innerHTML = `
        <div class="container-popUp">
          ${textContent}
          <div class="image-popUp">
            <img src="https://g-m-g-f.github.io/images/assets/m/educationalLevels/${nameImage}" alt="${altImage}" />
          </div>
          <button id="${idReturnBtn}">Regresar</button>
        </div>
      `;
    }
    $container.classList.add("loaded");
    const $closeBtn = document.getElementById(idReturnBtn);
    $body.classList.add("disable-scroll");
    $container.classList.add("active");
    $closeBtn.addEventListener("click", () => {
      $body.classList.remove("disable-scroll");
      $container.classList.remove("active");
    });
  };
  document.addEventListener("click", (e) => {
    if (e.target.matches("#level-preschool")) {
      popup(
        "level-preschool-popUp",
        `
          <p>El ciclo educativo preescolar en el Gimnasio Moderno Generación del Futuro ofrece los grados Jardín, Prejardín y Transición, y brinda una formación integral basada en las dimensiones cognitiva, afectiva, ética, moral y social como eje central, con puntos clave del niño del aprendizaje, como es el juego, el lenguaje, el arte y la literatura. Uno de sus objetivos específicos es el conocimiento de su propio cuerpo y de sus posibilidades de acción, así como la adquisición de su identidad y autonomía.</p>
        `,
        "baby.svg",
        "Ilutración de un niño pequeño.",
        "preschool-return"
      );
    } else if (e.target.matches("#level-basic")) {
      popup(
        "level-basic-popUp",
        `
          <div class="popUp-basic-text">
            <p>Este nivel de formación está formado por todos los grados que conforman el ciclo de primaria; es decir, 1°, 2°, 3°, 4° y 5°. En el primer grado, lo que se hace es potencializar la formación recibida en el grado Transición, de tal forma que el estudiante pueda ir siendo partícipe de su propio proceso de formación. Este nivel busca:</p>
            <li>Formación en los valores fundamentales para la convivencia.</li>
            <li>El fomento del deseo de saber.</li>
            <li>El desarrollo de competencias comunicativas básicas.</li>
            <li>Desarrollo de conocimientos matemáticos</li>
          </div>
        `,
        "little-girl-preparing-her-backpack.svg",
        "Ilustración de niña alistando su maleta.",
        "basic-return"
      );
    } else if (e.target.matches("#level-middle")) {
      popup(
        "level-middle-popUp",
        `
          <p>En nuestro colegio al igual que en la mayoría de instituciones de educativas del país, contamos con los cuatro grados de educación básica secundaría, es decir, 6°, 7°, 8° y 9°. Allí la formación en todas las áreas del saber se hace vital porque así como en la educación básica primaria se hace énfasis en las primeras habiliades escolares de los estudiantes, en esta etapa se concetra y se recalcan los conocimientos y destrezas que se necesitarán para los grados 10° y 11°, es decir, básica y media.</p>
        `,
        "friends-talking.svg",
        "Ilustración de jovenes hablando.",
        "middle-return"
      );
    }
  });
});
