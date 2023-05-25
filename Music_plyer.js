let audioEl = document.querySelector("#audio");

console.log(audioEl);

let playBtn = document.querySelector("#play-Btn");
let isPlaying = false;
playBtn.addEventListener("click", (e) => {
  if (isPlaying) {
    audioEl.pause();
    isPlaying = false;
    e.target.class;
  } else {
    audioEl.play();
    isPlaying = true;
  }
});
