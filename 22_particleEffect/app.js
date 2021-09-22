const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

window.addEventListener("resize", resize);
window.addEventListener("load", resize);

function resize() {
  pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
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
