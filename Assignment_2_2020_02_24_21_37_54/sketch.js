function setup() {
  createCanvas(400, 400);
  background(200,100,120)
  
  drawBody();
  
  drawTail();
  
  drawHead();
  
  drawEyes(25, 270);
  
  drawEyes(25, 325);
  
  drawNose();
  
  drawEars();
}

function draw() {

}

function drawBody(){
  //body
 beginShape();
  curveVertex(width * .15, height * .35);
  curveVertex(width * .7, height * .35);
  curveVertex(width * .6, height * .9);
  curveVertex(width * .5, height * .9);
  curveVertex(width * .5, height * .8);
  curveVertex(width * .2, height * .8);
  curveVertex(width * .2, height * .9);
  curveVertex(width * .1, height * .9);
  endShape(CLOSE);
}

function drawTail(){
  //tail
  beginShape();
  vertex(width * .15, height * .5);
  vertex(width * .2, height * .1);
  vertex(width * .3, height * .2);
  vertex(width * .3, height * .2);
  endShape(CLOSE);
}

function drawHead(){
  //head
   beginShape();
  circle(300, 100, 150);
}

function drawEyes(size, xPos){
  //eyes 1
  beginShape();
  fill(51);
  circle(xPos, 80, size);
  
  
}

function drawNose(){
   //nose
  beginShape();
  fill(51);
  circle(300, 120, 20);
}

function drawEars(){
   //ears 1
   beginShape();
  circle(360, 30, 60);
  
  //ears 2
   beginShape();
  circle(250, 30, 60);
}