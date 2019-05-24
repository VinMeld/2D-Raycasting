// Declaring variables
let walls = [], particle = [], food, xoff = 0, yoff = 10000;

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
  food = new Food(random(width), random(height));
}

// Continuously animates code
function draw() {
  background(0);

  for (let wall of walls) {
    wall.show();
  }

  let seeFood = 0;

  for (let i = 0; i < walls.length - 4; i++) {
    particle.resize(walls[i]);
    if (!food.seeWall(particle, walls[i])) {
      seeFood++;
    }
  }

  if (seeFood === (walls.length - 4)) {
    particle.update(food.pos.x, food.pos.y);
  } else {
    particle.update(mouseX, mouseY);
  }

  if (food.pos.x === particle.pos.x && food.pos.y === particle.pos.y) {
    food.pos.x = random(width);
    food.pos.y = random(height);
  }

  food.show();

  particle.show();
  particle.look(walls);

  xoff += 0.01;
  yoff += 0.01;
}
