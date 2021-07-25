import { Ripple } from "./ripple.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio >= 1.5 ? 2 : 1;

    this.ripple = new Ripple();

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
  }
  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ripple.animate(this.context);
  }

  onClick(e) {
    this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);

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
