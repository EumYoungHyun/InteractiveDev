const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

window.addEventListener("resize", resize);
window.addEventListener("load", init);

const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

function resize() {
  const stageWidth = document.body.clientWidth;
  const stageHeight = document.body.clientHeight;

  canvas.width = stageWidth * pixelRatio;
  canvas.height = stageHeight * pixelRatio;

  mouse.radius = (canvas.height / 100) * (canvas.width / 100);
}

let particlesArray;

let mouse = {
  x: null,
  y: null,
  radius: (canvas.height / 160) * (canvas.width / 160),
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x * pixelRatio;
  mouse.y = e.y * pixelRatio;
});

class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }

    // Check circle collision
    // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius + this.size) {
      console.log(distance, mouse.x, mouse.y);
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 3;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 3;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 3;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 3;
      }
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

function init() {
  resize();
  particlesArray = [];
  let numberOfParticles = (canvas.width * canvas.height) / 9000;

  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 5 + 1;
    let x = Math.random() * (canvas.width - size * 2 - size * 2) + size * 2;
    let y = Math.random() * (canvas.height - size * 2 - size * 2) + size * 2;
    let directionX = Math.random() * 5 - 2.5;
    let directionY = Math.random() * 5 - 2.5;
    let color = "#8C5523";

    particlesArray.push(
      new Particle(x, y, directionX, directionY, size, color)
    );
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connect();
  requestAnimationFrame(animate);
}

function connect() {
  for (let i = 0; i < particlesArray.length; i++) {
    for (let j = i; j < particlesArray.length; j++) {
      let dx = particlesArray[i].x - particlesArray[j].x;
      let dy = particlesArray[i].y - particlesArray[j].y;
      let distance = dx * dx + dy * dy;

      if (distance < (canvas.width / 10) * (canvas.height / 10)) {
        ctx.strokeStyle = `rgba(140,85,31,${
          1 - distance / ((canvas.width / 10) * (canvas.height / 10))
        })`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
}
window.addEventListener("mouseout", () => {
  mouse.x = undefined;
  mouse.y = undefined;
});

init();
animate();
