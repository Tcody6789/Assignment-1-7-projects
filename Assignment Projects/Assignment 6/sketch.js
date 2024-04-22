let img;

function preload(){
  img = loadImage("data/PSE Image.jpg")

}

function setup() {
  createCanvas(400, 520);
  print( img.width, img.height);

  
}

function draw() {
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);

  let d = dist(mouseX, mouseY, width/2, height/2);
  let b = map(d, 0, width/1, 0, 255);
  
  background(220);
  push()
  tint(r, g, b);
  image(img, 0, 0, width/2, height/2);
  pop()
  push()
  tint(b, g, r);
  image(img, 0, height/2, width/2, height/2);
  pop()
  push()
  tint(g, r, b);
  image(img, width/2, 0, width/2, height/2);
  pop()
  push()
  tint(r, b, g);
  image(img, width/2, height/2, width/2, height/2);
  pop()
  

  push()
  tint(r, g, b);
  pop()

  //image(img, 0, 0);
}
