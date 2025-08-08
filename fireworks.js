const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const colors = ["#FF5F6D", "#FFC371", "#FFD700", "#00E6E6", "#FF66FF"];
  const particleCount = Math.floor(Math.random() * 100) + 50;

  for (let i = 0; i < particleCount; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    particles.push({
      x,
      y,
      dx: (Math.random() - 0.5) * 4,
      dy: (Math.random() - 0.5) * 4,
      radius: 2,
      alpha: 1,
      color
    });
  }
}


function animate() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 100, 100, ${p.alpha})`;
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;
    p.alpha -= 0.01;

    if (p.alpha <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

setInterval(createFirework, 700);
animate();
