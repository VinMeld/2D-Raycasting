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

  // Moving particle towards mouse
  update() {
    let dir = createVector().set(mouseX-this.pos.x, mouseY-this.pos.y);
    this.vel.set(dir);
    this.vel.limit(0.85);
    this.pos.add(this.vel);
  }

  //
  updateFood(foodX, foodY) {
    let dir = createVector().set(foodX-this.pos.x, foodY-this.pos.y);
    this.vel.set(dir);
    this.vel.limit(0.85);
    this.pos.add(this.vel);
  }

  // Determines if particle is touching a boundary
  touch(wall) {
    let radius = this.radius;
    let touching = false;
    let equation = Math.abs(this.pos.y - (wall.slope * this.pos.x + wall.intercept));
    if (equation < radius) {
      let domainCheck = false;
      // Checking the domain
      if (wall.a.x > wall.b.x) {
        if (wall.a.x + radius > this.pos.x && this.pos.x > wall.b.x - radius) {
          domainCheck = true;
        }
      } else {
        if (wall.b.x + radius > this.pos.x && this.pos.x > wall.a.x - radius) {
          domainCheck = true;
        }
      }

      // Checking the range
      if (domainCheck) {
        if (wall.a.y > wall.b.y) {
          if (wall.a.y + radius > this.pos.y && this.pos.x > wall.b.y - radius) {
            touching = true;
          }
        } else {
          if (wall.b.y + radius > this.pos.y && this.pos.y > wall.a.y - radius) {
            touching = true;
          }
        }
      }
    }

    if (touching) {
      return true;
    } else {
      return false;
    }
  }

  // Increases particle size if touching boundary
  resize(wall) {
    if (this.touch(wall)) {
      this.radius += 0.2;
    }
    if (this.radius > 100){
      this.radius = 4;
    }
  }

  // Displays particle on canvas
  show(food) {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.radius);
    for (let ray of this.rays) {
      ray.show();
    }
    fill(255, 0, 0);
    text(Math.round(this.pos.x) + ", " + Math.round(this.pos.y), this.pos.x, this.pos.y + 20);
    //noStroke();
    line(food.pos.x + 5, food.pos.y + 5, this.pos.x + this.radius, this.pos.y + this.radius);
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
        // colorMode(HSB);
        // stroke((i + frameCount * 2) % 360, 255, 255, 50);
        stroke(255, 100);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }
}
