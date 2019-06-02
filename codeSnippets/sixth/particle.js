class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    this.vel = createVector(0,0);
    for (let a = 0; a < 360; a += 12) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update() {
    let dir = createVector().set(mouseX - this.pos.x, mouseY - this.pos.y);
    this.vel.set(dir);
    this.vel.limit(3);
    this.pos.add(this.vel);
  }

  look(walls) {
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i];
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        // colorMode(HSB);
        // stroke((i + frameCount * 2) % 360, 255, 255, 50);
        stroke(255, 255, 255);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  show() {
    fill(255);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}
