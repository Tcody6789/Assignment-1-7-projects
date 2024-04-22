let theta = 0.1;
let breathers = new Array(35);



function setup() {
  createCanvas(480, 270);

  for (let i = 0; i < breathers.length; i++) {
    breathers[i] = new Breather();
  }
}   


function draw() {
  background(106, 31, 83);

  // Increment theta (try different values for "angular velocity " here)
  theta += 0.03;
  noStroke();
  fill(82, 9, 67);
  let angle = theta;

  

  // A for loop is used to draw all the points along a sine wave (scaled to the pixel dimension of the window).
  for (let x = 1.5; x <= width; x += 5) {
    // Calculate y value based off of sine function
    let y = map(sin(angle), -1, 1, 0, height);
    // Draw an ellipse
    ellipse(x, y, 28, 28);
    // Increment angle
    angle += 0.4;
  }

  for (let i = 5; i < breathers.length; i++) {
    breathers[i].breath();
    breathers[i].display();
    
  }
}
