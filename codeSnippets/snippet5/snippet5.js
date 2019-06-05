let walls = [], ray, particle;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  particle = new Particle();
}

function draw() {
  background(0);
  for (let wall of walls) {
    wall.show();
    particle.look(wall);
  }
  particle.update(mouseX, mouseY);
  particle.show();
}
