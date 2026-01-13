function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(255);

  noStroke();
  fill(200, 32, 36); // red
  ellipse(300, 300, 500, 500);

  fill(255); // white
  ellipse(300, 300, 380, 380);

  stroke(255); // white
  strokeWeight(6);
  fill(82, 139, 204); // blue
  arc(300, 300, 350, 350, PI, 0, PIE);
  fill(200, 32, 36); // red
  arc(300, 300, 350, 350, 0, PI, PIE);
  noStroke();

  noFill();
  stroke(255); // white
  strokeWeight(4);
  ellipse(300, 300, 350, 350);
  noStroke();

  fill(255); // white
  textAlign(CENTER, CENTER);
  textSize(80);
  textFont('Arial');
  text('CAS', 300, 240);

  let barW = 60, barH = 12, barGap = 16;
  fill(255); // white
  for (let i = 0; i < 3; i += 1) {
    rect(230, 340 + i * (barH + barGap), barW, barH, 0);
  }

  push();
  translate(370, 370);
  rotate(radians(2)); // rotate star 
  fill(0, 160, 70); // green
  stroke(0, 120, 40); // dark green
  strokeWeight(2);
  star(); // No x, y arguments needed anymore
  pop();
}

function star() {
  beginShape();
  vertex(0, -45);    // top
  vertex(13, -15); // right upper
  vertex(43, -15); // right outer
  vertex(20, 5);  // right lower
  vertex(28, 35); // right bottom
  vertex(0, 18);   // bottom
  vertex(-28, 35); // left bottom
  vertex(-20, 5);  // left lower
  vertex(-43, -15); // left outer
  vertex(-13, -15); // left upper
  endShape(CLOSE);
}
