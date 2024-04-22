/*
Zoog follows mouse. Eyes changes color based on where the mouse position.
*/
function setup() {
  createCanvas(400, 400);
  // The frame rate is set to 30 frames per second.
  frameRate(30);
}

function draw() {
  background(23, 187, 203);


  // set rects to CENTER mode
  rectMode(CENTER)
  stroke(0)
  fill(mouseX/4, 60, 71, mouseY/3);
   
  // Draw the ground to represent the sky.
  rect(200,350,-400,+870);

  // set rects to CENTER mode
  rectMode(CENTER)
  stroke(0)
  fill(80, 220, 85 );
   // Draw the ground to represent the grass.
  rect(200,350,-400,+170);

  // Draw Alien Lazer
  stroke(0);
  fill(75, 255, 18 );
  // rect represents the lazor out of the Alien Spaceship
  rect(+70,+100,-30,+100);
  
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
  fill(113, 63, 46);
  // Draw the triangle represent the roof on top of the bulding
  triangle(20,220,70,190,120,220);

  // Set ellipses and rects to CENTER mode
  ellipseMode(CENTER);
  rectMode(CENTER); 
  
  // Draw Zoog's body
  stroke(0);
  fill(17, 52, 87);
  // Zoog's body is drawn at the location (mouseX, mouseY).
  rect(mouseX,mouseY,50,100);

  // Draw Zoog's Hair
  stroke(0);
  fill(33, 14, 1 )
  // Zoog's hair is drawn behind his head to represent his afro.
  ellipse(mouseX,mouseY-43,70,70);


  // Draw Zoog's head
  stroke(0);
  fill(152, 82, 31);
  // Zoog's head is drawn above the body at the location (mouseX, mouseY - 30).
  ellipse(mouseX,mouseY-30,60,60); 

  // Draw Zoog's Beard
  stroke(0);
  fill(33, 14, 1 )
  // Zoog's hair is drawn behind his head to represent his afro.
  ellipse(mouseX,mouseY+10,40,70);

  //Draw Zoog's mouth
  fill(0, 0, 0);
  ellipse(mouseX-1,mouseY-7.5, 15,15);
  
  // Draw Zoog's eyes
  //The location of the mouse determine the colors of the eyes
  fill(mouseX/60, 151, 243, mouseY/2); 
  ellipse(mouseX-19,mouseY-30,16,32); 
  ellipse(mouseX+19,mouseY-30,16,32);

  // Draw Zoog's legs
  stroke(0);
  line(mouseX-10,mouseY+50,mouseX-30,mouseY+100);
  line(mouseX+10,mouseY+50,mouseX+30,mouseY+100);

  // Draw Zoog's shoes
  stroke(0);
  fill(48, 20, 0)
  // Ellipse represents Zoog's shoes
  ellipse(mouseX-40,mouseY+100,50,20);
  ellipse(mouseX+40,mouseY+100,50,20);

  // Draw Zoog's Hands
  stroke(0);
  fill(152, 82, 31)
  // Ellipse represents Zoog's hands
  ellipse(mouseX-50,mouseY+20,20,20);
  ellipse(mouseX+50,mouseY+20,20,20);


}
