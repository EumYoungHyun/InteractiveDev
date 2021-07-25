import { getDistance } from "./utils.js";

export class Ripple {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.radius = 0;
    this.maxRadius = 0;
    this.speed = 15;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  start(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.maxRadius = this.getMax(x, y);
  }

  animate(context) {
    if (this.radius < this.maxRadius) {
      this.radius += this.speed;
    }

    context.beginPath();
    context.fillStyle = "#00ff00";
    context.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    context.fill();
  }

  getMax(x, y) {
    const c1 = getDistance(0, 0, x, y);
    const c2 = getDistance(this.stageWidth, 0, x, y);
    const c3 = getDistance(0, this.stageHeight, x, y);
    const c4 = getDistance(this.stageWidth, this.stageHeight, x, y);
    return Math.max(c1, c2, c3, c4);
  }
}
