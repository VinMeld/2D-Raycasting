class Food {
  constructor(x1, y1, x2, y2) {
    this.pos = createVector(x1, y1);
    this.pos1 = createVector(x2, y2);
    this.r = 3;
  }
  show() {
    rect(this.pos.x, this.pos.y, this.pos1.x, this.pos1.y);
  }
  update(x, y) {
    this.pos.set(x, y);
  }

}
