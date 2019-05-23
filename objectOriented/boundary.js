class Boundary {
  constructor(x1, y1, x2, y2) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
    if ((x1 - x2) != 0) {
      this.slope = (y2 - y1) / (x2 - x1);
    } else {
      this.slope = 0;
    }
    this.intercept = y2 - (this.slope * x2);
  }

  show() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    fill(255);
    text("A: " + Math.round(this.a.x) + ", " + Math.round(this.a.y), this.a.x, this.a.y + 15);
    text("B: " + Math.round(this.b.x) + ", " + Math.round(this.b.y), this.b.x, this.b.y + 15);
    text("Equation: " + Math.round(this.slope) + ", " + Math.round(this.intercept), this.b.x + 50, this.b.y + 35);
  }
}
