import { Ripple } from "./ripple.js";
import { Dot } from "./dot.js";
import { collide } from "./utils.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");

    this.tmpCanvas = document.createElement("canvas");
    this.tmpCtx = this.tmpCanvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio >= 1.5 ? 2 : 1;

    this.ripple = new Ripple();

    this.radius = 10;
    this.pixelSize = 30;
    this.dots = [];

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.isLoaded = false;
    this.imagePosition = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };

    this.image = new Image();
    this.image.src = "./dream_house.png";
    this.image.onload = () => {
      this.isLoaded = true;
      this.drawImage();
    };

    window.requestAnimationFrame(this.animate.bind(this));
    this.canvas.addEventListener("click", this.onClick.bind(this), false);
  }
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.context.scale(this.pixelRatio, this.pixelRatio);

    this.tmpCanvas.width = this.stageWidth;
    this.tmpCanvas.height = this.stageHeight;

    this.ripple.resize(this.stageWidth, this.stageHeight);
    if (this.isLoaded) {
      this.drawImage();
    }
  }

  drawImage() {
    const stageRatio = this.stageWidth / this.stageHeight;
    const imageRatio = this.image.width / this.image.height;

    this.imagePosition.width = this.stageWidth;
    this.imagePosition.height = this.stageHeight;

    if (imageRatio > stageRatio) {
      this.imagePosition.width = Math.round(
        this.image.width * (this.stageHeight / this.image.height)
      );
      this.imagePosition.x = Math.round(
        (this.stageWidth - this.imagePosition.width) / 2
      );
    } else {
      this.imagePosition.height = Math.round(
        this.image.height * (this.stageWidth / this.image.width)
      );
      this.imagePosition.y = Math.round(
        (this.stageHeight - this.imagePosition.height) / 2
      );
    }

    this.context.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.imagePosition.x,
      this.imagePosition.y,
      this.imagePosition.width,
      this.imagePosition.height
    );

    this.tmpCtx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.imagePosition.x,
      this.imagePosition.y,
      this.imagePosition.width,
      this.imagePosition.height
    );

    this.imgData = this.tmpCtx.getImageData(
      0,
      0,
      this.stageWidth,
      this.stageHeight
    );
    this.drawDots();
  }

  drawDots() {
    this.dots = [];

    this.columns = Math.ceil(this.stageWidth / this.pixelSize);
    this.row = Math.ceil(this.stageHeight / this.pixelSize);

    for (let i = 0; i < this.row; i++) {
      const y = (i + 0.5) * this.pixelSize;
      const pixelY = Math.max(Math.min(y, this.stageHeight), 0);

      for (let j = 0; j < this.columns; j++) {
        const x = (j + 0.5) * this.pixelSize;
        const pixelX = Math.max(Math.min(x, this.stageWidth), 0);

        const pixexIndex = pixelX * pixelY * this.stageWidth * 4;
        const red = this.imgData.data[pixexIndex + 0];
        const green = this.imgData.data[pixexIndex + 1];
        const blue = this.imgData.data[pixexIndex + 2];

        const dot = new Dot(
          x,
          y,
          this.radius,
          this.pixelSize,
          red,
          green,
          blue
        );

        this.dots.push(dot);
      }
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ripple.animate(this.context);

    for (let i = 0; i < this.dots.length; i++) {
      const dot = this.dots[i];
      if (
        collide(dot.x, dot.y, this.ripple.x, this.ripple.y, this.ripple.radius)
      ) {
        dot.animate(this.context);
      }
    }
  }

  onClick(e) {
    this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);

    // this.dot = new Dot(e.offsetX, e.offsetY, 3, 10, 200, 120, 20);
    this.context.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.imagePosition.x,
      this.imagePosition.y,
      this.imagePosition.width,
      this.imagePosition.height
    );

    this.ripple.start(e.offsetX, e.offsetY);
  }
}
window.onload = () => {
  new App();
};
