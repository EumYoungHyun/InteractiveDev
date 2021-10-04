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

    window.addEventListener("resize", this.resize.bind(this), false);

    this.resize();

    this.imagePos = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    this.easelPos = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };

    this.image = new Image();
    this.image.src = "image.jpg";
    this.image.onload = () => {
      this.imageLoaded = true;
      this.resize();
    };

    this.easel = new Image();
    this.easel.src = "easel.jpg";
    this.easel.onload = () => {
      this.easelLoaded = true;
      this.resize();
    };
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
    if (this.imageLoaded && this.easelLoaded) {
      this.drawImage();
    }
  }

  drawImage() {
    const stageRatio = this.stageWidth / this.stageHeight;
    const imageRatio = this.image.width / this.image.height;
    const easelRatio = this.easel.width / this.easel.height;

    this.imagePos.width = this.stageWidth;
    this.imagePos.height = this.stageHeight;
    this.easelPos.width = this.stageWidth;
    this.easelPos.height = this.stageHeight;

    if (imageRatio > stageRatio) {
      this.imagePos.width = Math.round(
        this.image.width * (this.stageHeight / this.image.height)
      );
      this.imagePos.x = Math.round((this.stageWidth - this.imagePos.width) / 2);
    } else {
      this.imagePos.height = Math.round(
        this.image.height * (this.stageWidth / this.image.width)
      );
      this.imagePos.y = Math.round(
        (this.stageHeight - this.imagePos.height) / 2
      );
    }

    if (easelRatio > stageRatio) {
      this.easelPos.width = Math.round(
        this.easel.width * (this.stageHeight / this.easel.height)
      );
      this.easelPos.x = Math.round((this.stageWidth - this.easelPos.width) / 2);
    } else {
      this.easelPos.height = Math.round(
        this.easel.height * (this.stageWidth / this.easel.width)
      );
      this.easelPos.y = Math.round(
        (this.stageHeight - this.easelPos.height) / 2
      );
    }

    this.imageCtx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.imagePos.x,
      this.imagePos.y,
      this.imagePos.width,
      this.imagePos.height
    );

    this.ctx.drawImage(
      this.easel,
      0,
      0,
      this.easel.width,
      this.easel.height,
      this.easelPos.x,
      this.easelPos.y,
      this.easelPos.width,
      this.easelPos.height
    );
    console.log(this.easelPos, this.imagePos);
  }
}

window.onload = () => {
  new App();
};
