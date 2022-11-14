const $body = document.body;

export function theme() {
  if (!localStorage.getItem("theme")) {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? localStorage.setItem("theme", "dark-theme")
      : localStorage.setItem("theme", "light-theme");
  }
  localStorage.getItem("theme") === "dark-theme"
    ? $body.classList.add("dark-theme")
    : $body.classList.remove("dark-theme");
}
