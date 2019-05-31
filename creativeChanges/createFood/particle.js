class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.radius = 4;
    this.rays = [];
    for (let a = 0; a < 360; a += 1) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  // Moves particle towards mouse or food
  update(x, y) {
    let dir = createVector().set(x - this.pos.x, y - this.pos.y);
    this.vel.set(dir);
    this.vel.limit(2);
    this.pos.add(this.vel);
  }

  // Determines if particle is touching a boundary
  touch(wall) {
    let touching = false;
    let equation = Math.abs(this.pos.y - (wall.slope * this.pos.x + wall.intercept));

    if (equation < this.radius) {
      let domainCheck = false;

      // Checks domain of boundary
      if ((wall.a.x > wall.b.x) && (wall.a.x + this.radius > this.pos.x && this.pos.x > wall.b.x - this.radius)) {
        domainCheck = true;
      } else if (wall.b.x + this.radius > this.pos.x && this.pos.x > wall.a.x - this.radius) {
        domainCheck = true;
      }

      // Checks range of boundary
      if (domainCheck) {
        if ((wall.a.y > wall.b.y) && (wall.a.y + this.radius > this.pos.y && this.pos.x > wall.b.y - this.radius)) {
          touching = true;
        } else if (wall.b.y + this.radius > this.pos.y && this.pos.y > wall.a.y - this.radius) {
          touching = true;
        }
      }
    }

    return (touching ? true : false);
  }

  // Increases particle size if touching boundary
  resize(wall) {
    if (this.touch(wall)) {
      this.radius += 0.2;
    }
    if (this.radius > 100) {
      this.radius = 4;
    }
  }

  // Displays particle on canvas
  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.radius);
    for (let ray of this.rays) {
      ray.show();
    }
  }

  // Draws rays from particle to boundaries
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
        stroke(255, 100);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }
}
