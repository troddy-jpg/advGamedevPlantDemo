let plant, medium;
let imgDim = 200;
function preload() {
  plant = loadImage('placeholder-plant.webp');
  medium = loadImage('placeholder-medium-1.webp');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50×50
  
  image(plant, (width / 2) - (imgDim/2), height / 20, imgDim, imgDim);
  image(medium, width /2 - (imgDim/2), height / 10 + imgDim, imgDim, imgDim);
  
  
  //draw a line from bottom middle of first image to top middle of second image
  line(width / 2, height / 20 + imgDim, width / 2, height / 10 + imgDim);
}

function draw() {
}