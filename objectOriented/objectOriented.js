// Declaring variables
let walls = [], particle = [], food, xoff = 0, yoff = 10000;

// Setting up program and instances
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 1; i++) {
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

  food = new Food(random(width), random(height), particle);
}

// Continuously animates code
function draw() {
  background(0);

  for (let i = 0; i < walls.length; i++){
    walls[i].show();
    particle.resize(walls[i]);
    if (!food.see(particle, walls[i])) {
    //  particle.updateFood(food.pos.x, food.pos.y);
    } else {
      particle.update();
    }
  }

  food.show();

  particle.update();

  particle.show(food);
  particle.look(walls);

  xoff += 0.01;
  yoff += 0.01;

}
