class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    for (let a = 0; a < 360; a += 1) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  touch(walls) {
    for (let i = 0; i < walls.length; i++) {
      if (walls[i].a.x > walls[i].b.x && walls[i].a.y > walls[i].b.y) {
        if (this.pos.x >= walls[i].a.x && this.pos.x <= walls[i].b.x && this.pos.y >= walls[i].a.y && this.pos.y <= walls[i].b.y) {
          console.log("hi");
        }
      } else if (walls[i].a.x < walls[i].b.x && walls[i].a.y > walls[i].b.y ) {
        if (this.pos.x >= walls[i].b.x && this.pos.x <= walls[i].a.x && this.pos.y >= walls[i].a.y && this.pos.y <= walls[i].b.y) { // Switched a.x to b.x
          console.log("hi 2");

        }
      } else if (walls[i].a.x > walls[i].b.x && walls[i].a.y < walls[i].b.y ) {

        if (this.pos.x >= walls[i].a.x && this.pos.x <= walls[i].b.x && this.pos.y >= walls[i].b.y && this.pos.y <= walls[i].a.y) { // Switched a.y to b.y
          console.log("hi 3");
        }
      } else if (walls[i].a.x < walls[i].b.x && walls[i].a.y < walls[i].b.y ) {

        if (this.pos.x >= walls[i].b.x && this.pos.x <= walls[i].a.x && this.pos.y >= walls[i].a.y && this.pos.y <= walls[i].b.y) { // Switched a.y to b.y and a.x to b.x
          console.log("hi 4");
        }
      }
    }
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
        stroke(255, 100);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for (let ray of this.rays) {
      ray.show();
    }
    fill(255, 0, 0);
    text(Math.round(this.pos.x) + " " + Math.round(this.pos.y), this.pos.x, this.pos.y + 20);
  }
}
