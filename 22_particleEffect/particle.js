class Particle {
  constructor(x, y, directionX, directionY, size, color, canvas, mouse) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  draw() {
    ctx.beginPath();
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
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - 20) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > 20) {
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas.height - 20) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > 20) {
        this.y -= 10;
      }
    }
  }
}
