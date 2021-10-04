class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.imageCanvas = document.createElement("canvas");
    //이미지를 뒤에 띄어놓고 그림만 복사해올 예정
    this.imageCanvas.classList.add("image_canvas");

    document.body.appendChild(this.canvas);
    document.body.appendChild(this.imageCanvas);

    this.ctx = this.canvas.getContext("2d");
    this.imageCtx = this.imageCanvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    const image = new Image();
    image.src = "easel.jpg";
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.imageCanvas.width = this.stageWidth * this.pixelRatio;
    this.imageCanvas.height = this.stageHeight * this.pixelRatio;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);
    this.imageCtx.scale(this.pixelRatio, this.pixelRatio);

    const image = new Image();
    image.src = "image.jpg";
    image.onload = () => {
      this.imageCtx.drawImage(
        image,
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );
    };
  }
}

window.onload = () => {
  new App();
};
