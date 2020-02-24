let angleWag;
let mic;
let micLevel;

function setup() {  
createCanvas(400, 400);
angleMode(DEGREES);

mic = new p5.AudioIn()
mic.start();
}

function draw() {
//console.log("mic level" + mic.getLevel());

  micLevel = mic.getLevel(); 
  angleWag = map(mic.getLevel(), 0, .1, 345, 369);

background(200,100,120)
  
  drawBody();
  
  drawTail(angleWag);
  
  drawHead();
  
  drawEyes(25, 270);
  
  drawEyes(25, 325);
  
  drawNose(micLevel * 100);
  
  drawEars();
  
  drawBone();
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
  triangle(370, 75, 343, 35, 385, 35);
  triangle(230, 75, 214, 35, 255, 35);
  
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
}

function drawBone() {
  rectMode(CORNER); // Default rectMode is CORNER
  fill(255); // Set fill to white
  rect(mouseX, mouseY, 70, 20);
  ellipse(mouseX, mouseY, 20, 20);
  ellipse(mouseX, mouseY + 20, 20, 20);
  ellipse(mouseX + 70, mouseY, 20, 20);
  ellipse(mouseX + 70, mouseY + 20, 20, 20);
}
