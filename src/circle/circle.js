const PI2 = Math.PI * 2;

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.vx = Math.random() * 4;
    this.vy = Math.random() * 4;
    this.sinValue = Math.random();
  }

  animate = (ctx, stageWidth, stageHeight) => {
    this.sinValue += 0.01;
    this.radius += Math.sin(this.sinValue);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 10;
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 10;
    }

    ctx.beginPath();
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.1,
      this.x,
      this.y,
      this.radius
    );

    gradient.addColorStop(0, "rgba(171, 171, 244, 0.7)");
    // gradient.addColorStop(0.3, "rgba(253, 195, 183, 1)");
    gradient.addColorStop(1, "rgba(219, 174, 217, 0)");

    ctx.fillStyle = gradient;
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fill();
  };
}

export default Circle;
