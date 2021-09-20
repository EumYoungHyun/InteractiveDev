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
