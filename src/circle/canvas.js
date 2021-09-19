import Circle from "./circle.js";

class Canvas {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.home = document.querySelector("#home");
    this.home.appendChild(this.canvas);

    this.minRadius = 300;
    this.maxRadius = 500;
    this.totalCircles = 10;
    this.circles = [];

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    window.addEventListener("resize", this.resize);
    this.ctx.globalCompositeOperation = "saturation";
    this.resize();
    window.requestAnimationFrame(this.animate);
  }

  resize = () => {
    this.stageWidth = this.home.clientWidth;
    this.stageHeight = this.home.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.createCircle();
  };

  createCircle = () => {
    for (let i = 0; i < this.totalCircles; i++) {
      const circle = new Circle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius
      );
      this.circles[i] = circle;
    }
  };

  animate = () => {
    window.requestAnimationFrame(this.animate);
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    for (let i = 0; i < this.totalCircles; i++) {
      this.circles[i].animate(this.ctx, this.stageWidth, this.stageHeight);
    }
  };
}

export default Canvas;
