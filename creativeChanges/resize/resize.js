// Declaring variables
let walls = [], particle = [], col = 255;

// Setting up program and instances
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }

  walls.push(new Boundary(0, 0, width, 0));
  walls.push(new Boundary(width, 0, width, height));
  walls.push(new Boundary(width, height, 0, height));
  walls.push(new Boundary(0, height, 0, 0));
  particle = new Particle();
}

// Continuously animates code
function draw() {
  background(0);

  for (let wall of walls) {
    wall.show();
  }

  for (let i = 0; i < walls.length - 4; i++) {
    particle.resize(walls[i]);
  }
  
  particle.update(mouseX, mouseY);
  particle.show();
  particle.look(walls);
}
