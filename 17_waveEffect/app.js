class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio >= 1.5 ? 2 : 1;
    console.log(window.devicePixelRatio);
  }
}

window.onload = () => {
  new App();
};
