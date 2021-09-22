import Particle from "./particle.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

window.addEventListener("resize", resize);
window.addEventListener("load", init);

function resize() {
  const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
  const stageWidth = document.body.clientWidth;
  const stageHeight = document.body.clientHeight;

  canvas.width = stageWidth * pixelRatio;
  canvas.height = stageHeight * pixelRatio;
}

let particlesArray;

let mouse = {
  x: null,
  y: null,
  radius: (canvas.height / 80) * (canvas.width / 80),
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

function init() {
  resize();
  particlesArray = [];
  let numberOfParticles = (canvas.width * canvas.height) / 9000;

  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 5 + 1;
    let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
    let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
    let directionX = Math.random() * 5 - 2.5;
    let directionY = Math.random() * 5 - 2.5;
    let color = "#8C5523";

    particlesArray.push(
      new Particle(x, y, directionX, directionY, size, color, canvas, mouse)
    );
  }
}

function animate() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }

  requestAnimationFrame(animate);
}

init();
animate();
