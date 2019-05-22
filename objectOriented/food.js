class Food extends Particle {
  constructor(x1, y1) {
    this.poi = createVector(0, 0);
    this.pos1 = createVector(x1, y1);
    this.m = (this.pos.y - this.pos.y+10) / (this.pos.x - this.pos.x+10)
    this.b = this.pos.y - (this.m * this.pos.x)
  }

  // Displays food on canvas
  show() {
    rect(this.pos1.x, this.pos1.y, 10, 10);
  }

  //
  update(x, y) {
    this.pos.set(x, y);
  }

  //
  see(ray) { //(b-b/m-m)
    this.poi.x = (this.intercept - this.b) / (this.m - this.slope);
    this.poi.y = (this.m * this.poi.x) - this.b;
    domain = false;
    if(this.pos1.x < this.poi.x && this.poi.x < this.pos.x){
      domain = true;
    } else if(this.pos.x < this.poi.x && this.pos1.x > this.pos.x){
      daomain = true;
    }

  }
}
