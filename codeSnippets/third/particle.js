class Particle{
  constructor(){
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    for(let a = 0; a < 360; a += 10){
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }
  look(wall){
    for(let ray of this.rays){
        const pt = ray.cast(wall);
     if(pt){
       line(this.pos.x,this.pos.y, pt.x, pt.y);
     }
   }
  }
  show(){
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for(let ray of this.rays){
      ray.show();
    }
  }
}
