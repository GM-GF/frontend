let player = videojs("videoPlayer", {
  controls: true,
  fluid: true,
  aspectRatio: "4:3",
  poster: "https://g-m-g-f.github.io/images/assets/m/welcome/poster.jpg",
  playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
  plugins: {
    hotkeys: {
      enableModifiersForNumbers: true,
      seekStep: 5,
    },
  },
});
document
  .getElementById("watch-video")
  .addEventListener("click", () => videojs("videoPlayer").play());
