// Michael Lam
// June 2, 2019
// This program is used in our Coding Challenge presentation to provide an example of how classes work.

// Declaring variables
let car = [];

// Runs program once
function setup() {
  createCanvas(600, 600);
  
  // Attributes order (defined in Car class): x coordinate, y coordinate, x length, y length, maximum speed
  car.push(new Car(100, 100, 100, 50, 200)); // Sets the attributes of the first car
  car.push(new Car(300, 300, 200, 100, 100)); // Sets the attributes of the second car

  // Draws a grid for every 100 pixels
  for (let i = 0; i < width; i += 100) {
    fill(0);
    line(i, 0, i, 600);
    line(0, i, 600, i);
    text(" " + i, i, 10);
    text(" " + i, 0, i);
  }
  
  for (let i = 0; i < car.length; i++) { // Runs the following code for each car in the array
    fill(0);
    // Displays the max speed above the corresponding car
    text("Max speed: " + car[i].maxSpeed + "km/h", car[i].x, car[i].y);
    // Displays the car on the canvas
    car[i].display();
  }
}
