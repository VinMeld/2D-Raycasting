class Car {
  // This is called a constructor. It is used to define attributes of the object.
  constructor(x, y, sizeX, sizeY, maxSpeed) {
    // Because the variables differ based on what was set for each car in classExample.js,
    // we use a temporary variable so that the value isn't constant across all cars.
    // You can otherwise initialize these variables as desired. For example, you can set
    // this.sizeX = 200 to make all cars have a horizontal length of 200 pixels.
    // In this case, you would not need the variable tempX.
    
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.maxSpeed = maxSpeed;
  }
  
  // This function is called from classExample.js.
  display() {
    fill(255, 100, 100);
    // Car (rectangle) is drawn according to the attributes
    // defined for the corresponding car in classExample.js
    rect(this.x, this.y, this.sizeX, this.sizeY);
  }
}
