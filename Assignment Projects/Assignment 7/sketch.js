let video;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  //video.hide(); // Hide the video element
}

function draw() {
  // Mirror the video horizontally
  translate(width, 0);
  scale(-1, 1);

  // Draw video with randomized colors
  image(randomizeColors(), 0, 0, width, height);

  // Draw patterns or effects here
  drawPattern(); // Call function to draw pattern
}

function randomizeColors() {
  video.loadPixels();
  // Loop through each pixel of the video and randomize the color
  for (let i = 0; i < video.pixels.length; i += 1) {
    video.pixels[i] = random(255); // Red
    video.pixels[i + 1] = random(255); // Green
    video.pixels[i + 2] = random(255); // Blue
  }
  video.updatePixels();
  return video;
}

function drawPattern() {
  // Draw a simple pattern of lines
  stroke(0); // Set stroke color to black
  strokeWeight(1);
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      line(x, y, x + 10, y + 10);
      line(width - x, y, width - (x + 10), y + 10); // Mirror the line horizontally
    }
  }
}
