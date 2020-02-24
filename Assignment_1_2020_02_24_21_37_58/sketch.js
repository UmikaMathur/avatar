function setup() {
  alert("hello art 101");
  createCanvas(400, 400);
  background(200,100,120)
  
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
  
  //tail
  beginShape();
  vertex(width * .15, height * .5);
  vertex(width * .2, height * .1);
  vertex(width * .3, height * .2);
  vertex(width * .3, height * .2);
  endShape(CLOSE);
  
  //head
   beginShape();
  circle(300, 100, 150);
  
  //eyes 1
  beginShape();
  fill(51);
  circle(270, 80, 25);
  
  //eyes 2
   beginShape();
  fill(51);
  circle(325, 80, 25);
  
  //nose
  beginShape();
  fill(51);
  circle(300, 120, 20);
  
  //ears 1
   beginShape();
  circle(360, 30, 60);
  
  //ears 2
   beginShape();
  circle(250, 30, 60);
}

function draw() {

}