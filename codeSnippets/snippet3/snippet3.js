let wall, ray, particle;

function setup() {
  createCanvas(400, 400);
  wall = new Boundary(300, 100, 300, 300);
  particle = new Particle();
}

function draw() {
  background(0);
  wall.show();
  particle.show();
  particle.look(wall);
}
