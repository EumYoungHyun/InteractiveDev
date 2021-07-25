export class Dot {
  constructor(x, y, radius, pixelSize, red, green, blue) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.pixelSize = pixelSize;
    this.pixelSizeHalf = pixelSize / 2;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  animate(context) {
    context.beginPath();
    context.fillStyle = "#000";
    context.fillRect(
      this.x - this.pixelSizeHalf,
      this.y - this.pixelSizeHalf,
      this.pixelSize,
      this.pixelSize
    );

    context.beginPath();
    context.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fill();
  }
}
