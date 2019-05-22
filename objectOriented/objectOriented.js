// Declaring variables
let walls = [], food, ray, particle = [], xoff = 0, yoff = 10000, dir = 1;

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
   x1 = random(width);
   x2 = random(width);
   y1 = random(height);
   y2 = random(height);
  food = new Food(x1, y1, x2, y2);
}

function draw() {
  background(0);

  for (let wall of walls) {
    wall.show();
  }

  let pathX = mouseX;
  let pathY = mouseY;
  //console.log(Math.round(pathX) + ", " + Math.round(pathY));
  for (let i = 0; i < walls.length; i++){
    if (particle.touch(walls[i])) {
        pathX = random(width);
        pathY = random(height);
      //xoff *= -0.1;
      //yoff *= -0.1;
    }
  }
  particle.update(pathX, pathY);
  particle.show();
  particle.look(walls);

/*
  food.show();
  food.update();
*/

  //xoff += 0.01;
  //yoff += 0.01;
}
