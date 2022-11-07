let music;
const $containerActiveSound = document.querySelectorAll(
  ".anthem-section1-btns div"
)[0];
const $containerPauseSound = document.querySelectorAll(
  ".anthem-section1-btns div"
)[1];
const $activeSound = document.getElementById("play-sound");
const $pauseSound = document.getElementById("pause-sound");
const $resetSound = document.getElementById("reset-sound");
const $emoji = document.getElementById("emoji");
const $contentPhone = document.getElementById("content-phone");
const $sound = document.createElement("audio");
$sound.setAttribute(
  "src",
  "https://g-m-g-f.github.io/images/assets/m/we/anthem/himno-Gimnasio-Moderno-Generacion-del_Futuro.mp3"
);
$activeSound.addEventListener("click", () => {
  $containerActiveSound.classList.add("active-sound");
  $containerActiveSound.classList.add("container-activeSound-hidden");
  $containerPauseSound.classList.remove("pause-sound-hidden");
  $emoji.classList.add("emoji-active");
  $contentPhone.classList.add("content-phone-active");
  music = setTimeout(() => {
    // Se ejecuta una sola vez si le da click
    $sound.play();
  }, 0);
});
$pauseSound.addEventListener("click", () => {
  $containerActiveSound.classList.remove("active-sound");
  $containerPauseSound.classList.add("pause-sound-hidden");
  $containerActiveSound.classList.remove("container-activeSound-hidden");
  $sound.pause();
  $emoji.classList.remove("emoji-active");
  $contentPhone.classList.remove("content-phone-active");
});
$resetSound.addEventListener("click", () => {
  if ($activeSound.classList.contains("active-sound") === false) {
    $containerActiveSound.classList.add("active-sound");
    $containerActiveSound.classList.add("container-activeSound-hidden");
    $containerPauseSound.classList.remove("pause-sound-hidden");
    $emoji.classList.add("emoji-active");
    $contentPhone.classList.add("content-phone-active");
  }
  clearTimeout(music);
  $sound.currentTime = 0; // Que empiece en el segundo 0
  $sound.play();
});
