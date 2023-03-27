let plant, medium;
let imgDim = 200;
function preload() {
  plantImg = loadImage('placeholder-plant.webp');
  medium = loadImage('placeholder-medium-1.webp');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50×50
  
  let plantImgx = ((width / 2) - (imgDim / 2));
  let plantImgy = (height / 20);

  let mediumImgx = width /2 - (imgDim/2)
  let mediumImgy = height / 10 + imgDim

  let line1Start = (width / 2, height / 20 + imgDim)//bottom middle of plantImg
  let line1End =( width / 2, height / 10 + imgDim)  //top middle of soil
  
}

function draw() {
  background(255) //clears previous frame by painting screen (color)

  //image (url, x, y, dimx, dimy)
  image(plantImg, plantImgx, plantImgy, imgDim, imgDim);
  image(medium, mediumImgx, mediumImgy, imgDim, imgDim);
  //line (xStart, yStart, xEnd, yEnd)
  line(line1Start, line1End);
}