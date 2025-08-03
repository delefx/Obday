const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const particles = [];

function createFirework() {
  const x = random(100, canvas.width - 100);
  const y = random(100, canvas.height / 2);
  const count = 80;
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = random(1, 6);
    particles.push({
      x, y,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      life: 0,
      color: `hsl(${Math.floor(random(0, 360))}, 100%, 60%)`
    });
  }
}

function animate() {
  ctx.fillStyle = 'rgba(63, 60, 83, 0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.dx;
    p.y += p.dy;
    p.dy += 0.05; // gravity
    p.life += 1;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();

    if (p.life > 80) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

setInterval(createFirework, 1200);
animate();
