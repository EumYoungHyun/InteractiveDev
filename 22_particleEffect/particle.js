export default class Particle {
  constructor(x, y, directionX, directionY, size, color, canvas, mouse) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.mouse = mouse;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    this.ctx.fillStyle = "#8C5523";
    this.ctx.fill();
  }

  update() {
    if (this.x > this.canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > this.canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }

    // Check circle collision
    // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    let dx = this.mouse.x - this.x;
    let dy = this.mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < this.mouse.radius + this.size) {
      if (
        this.mouse.x < this.x &&
        this.x < this.canvas.width - this.size * 10
      ) {
        this.x += 10;
      }
      if (this.mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }
      if (
        this.mouse.y < this.y &&
        this.y < this.canvas.height - this.size * 10
      ) {
        this.y += 10;
      }
      if (this.mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }

    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}
