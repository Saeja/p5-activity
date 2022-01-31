var movemeupdown = 0; // change me to move Richmond + Sea Island on the y axis
var movemeleftright = 0; // change me to move Richmond + Sea Island on the x axis


var size = 1; // declaration of variables


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0, 175, 255);
  strokeWeight(3);
  translate(movemeleftright, movemeupdown); // originally had movemeleftright &   movemeupdown added to each of the x & y of the vertices following but found this in the reference list to make it tidier (ie. vertex (movemeleftright + 100, movemeupdown + 200)).

  // Richmond Landshape
  fill(230);
  beginShape(); // used vertex instead of line to fill
  vertex(100, 200);
  vertex(200, 200);
  vertex(200, 200);
  vertex(250, 125);
  vertex(250, 125);
  vertex(500, 125);
  vertex(500, 125);
  vertex(650, 200);
  vertex(650, 200);
  vertex(475, 300);
  vertex(475, 300);
  vertex(400, 400);
  vertex(400, 400);
  vertex(250, 400);
  vertex(250, 400);
  vertex(100, 400);
  endShape(CLOSE);

  // Sea Island Landshape
  fill(150);
  beginShape();
  vertex(100, 185);
  vertex(100, 100);
  vertex(150, 75);
  vertex(230, 125);
  vertex(190, 185);
  endShape(CLOSE);

  // City Centre Proportional Circle Population
  fill(225, 0, 127);
  strokeWeight(1);
  circle(270, 200, size);

  // size increments
  size = size + 2;

  // conditional
  if (size > 200) size = 200;

  // South Arm Proportional Circle Population
  fill(204, 204, 0);
  strokeWeight(1);
  circle(375, 325, size / 2); // half of population size circle of City Centre
}
