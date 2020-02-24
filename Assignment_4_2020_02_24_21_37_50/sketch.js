

function setup() {
  createCanvas(600, 400);
  background(300,100,120);
}

function draw() {
 if (mouseIsPressed){
    fill(333, 222, 111, 70);
    ellipse(mouseX, mouseY, 80, 80);
}
  else {
  fill(53, 200, 433, 90);
  rectMode(CENTER);
  rect(mouseX, mouseY, 80, 80);
    
  }
  
}