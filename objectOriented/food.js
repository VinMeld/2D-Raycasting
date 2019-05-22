class Food extends Particle {
  constructor(x1, y1) {
    this.poi = createVector(0, 0);
    this.pos1 = createVector(x1, y1);
    this.m = (this.pos.y - this.pos1.y+10) / (this.pos.x - this.pos1.x+10)
    this.b = this.pos1.y - (this.m * this.pos1.x)
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



    if(wall.a.x < this.poi.x && wall.b.x > this.poi.x || wall.b.x < this.poi.x && wall.a.x > this.poi.x){
      if(wall.a.y < this.poi.y && wall.b.y > this.poi.y || wall.b.y < this.poi.y && wall.a.y > this.poi.y){
        if(this.pos.y < this.poi.y && this.pos1.y > this.poi.y || this.pos1.y < this.poi.y && this.pos.y > this.poi.y){
          if(this.pos.x < this.poi.x && this.pos1.x > this.poi.x || this.pos1.x < this.poi.x && this.pos.x > this.poi.x){
            domain = true;
            }
          }
        }
      }


  }
}
