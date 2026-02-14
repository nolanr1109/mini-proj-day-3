

function setup() {
  createCanvas(400, 400);
    background(0)
}

function draw() {
  
  
  noStroke();
  fill(200, 70, 100)
  ellipse(mouseX, mouseY, 25, 25)
}

function mousePressed(){
  background(0)
}

function keyPressed(){
  if (key === 'c'){
    noStroke();
    fill(0, 200, 0)
    ellipse(mouseX, mouseY, 25, 25)
  }
}