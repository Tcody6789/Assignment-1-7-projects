/*
Zoog follows mouse. Eyes changes color based on where the mouse position.
*/
let myCar1;
let myCar2;
let myCar3;
let myCar4;
let circleSize = 40;
let circleX = 70;
let circleY = 70;
let speed;
let zoogies = new Array(200);

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < zoogies.length; i ++ ) {
    zoogies[i] = new Zoog(random(width),random(height),30,30,8);
  }

  // The frame rate is set to 30 frames per second.
  myCar1 = new Car(color(194, 192, 191), 0, 100, 2); // Parameters go inside the parentheses when the object is constructed.
  myCar2 = new Car(color(194, 192, 191), 0, 200, 1);
  myCar3 = new Car(color(194, 192, 191), 0, 220, 2);
  myCar4 = new Car(color(194, 192, 191), 0, 130, 1);
  frameRate(30);

}

function draw() {
  background(23, 187, 203);
  for (let i = 0; i < zoogies.length; i ++ ) {
    zoogies[i].display();
    zoogies[i].jiggle();
  }
  
  // set rects to CENTER mode
  rectMode(CENTER)
  stroke(0)
  fill(34, 240, 250);
   
  // Draw the ground to represent the sky.
  rect(200,350,-400,+870);
  
  // set rects to CENTER mode
  rectMode(CENTER)
  stroke(0)
  fill(80, 220, 85 );
   // Draw the ground to represent the grass.
  rect(200,350,-400,+170);

  myCar1.move();
  myCar1.display();
  
  myCar2.move();
  myCar2.display();
  
  myCar3.move();
  myCar3.display();
  
  myCar4.move();
  myCar4.display();
  // Draw Alien Lazer
  stroke(0);
  fill(random(250), random(250), random(250));
  // rect represents the lazor out of the Alien Spaceship
  rect(+70,+120,-40,+200);
  
  // Draw Alien Spaceship
  stroke(0);
  fill(194, 192, 191 );
  // Elipse represent Alien Spaceship
  ellipse(70,40,90,27);
  ellipse(70,30,60,27);
  
  // Draw Zoog's House
  stroke(0)
  fill(229, 72, 22 );
   // Draw the rect represent the building of the house
  rect(+70,+250,-60,+60);

  // Draw Zoog's Roof on House
  stroke(0)
  fill(113, 63, random(250));
  // Draw the triangle represent the roof on top of the bulding
  triangle(20,220,70,190,120,220);

  // Set ellipses and rects to CENTER mode
  ellipseMode(CENTER);
  rectMode(CENTER); 
  
  

  // An assignment operation that increments the value of circleX by 1.
  circleX = circleX + 1;
  circleSize += speed*0.01;
  print("circleSize: ",circleSize);


  

 
}



class Car {
  constructor(tempC, tempXpos, tempYpos, tempXspeed) { // The Constructor is defined with arguments.
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.xspeed = tempXspeed;

    this.display = () => {
      stroke(0);
      fill(this.c);
      ellipseMode(CENTER);
      ellipse(this.xpos, this.ypos, 20, 10);
    };

    this.move = () =>{
      this.xpos = this.xpos + this.xspeed;
      if (this.xpos > width) {
        this.xpos = 0;
      }
    };
  }
}

