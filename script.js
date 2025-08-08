document.addEventListener("DOMContentLoaded", () => {
  const song = document.getElementById("birthdaySong");

  const playAudio = () => {
    song.play().catch(() => {
      // Silent fail — autoplay blocked until further interaction
    });

    window.removeEventListener("click", playAudio);
    window.removeEventListener("scroll", playAudio);
  };

  window.addEventListener("click", playAudio);
  window.addEventListener("scroll", playAudio);
});
