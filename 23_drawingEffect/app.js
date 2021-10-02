class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.imageCanvas = document.createElement("canvas");
    //이미지를 뒤에 띄어놓고 그림만 복사해올 예정
    this.imageCanvas.classList.add("image_canvas");
    document.body.appendChild(this.canvas);
    document.body.appendChild(this.imageCanvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.thumbs = [];
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }
}

window.onload = () => {
  new App();
};
