function setup() {
  createCanvas(400, 400);
    background(10)
}

function draw() {
  
  
  noStroke();
  fill(200, 100, 100)
  ellipse(mouseX, mouseY, 25, 25)
}

function mousePressed(){
  background(0)
}