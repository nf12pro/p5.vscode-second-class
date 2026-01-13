
function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  noStroke();
  fill(200, 32, 36); // red
  ellipse(0, 0, 500, 500);

  fill(255); // white
  ellipse(0, 0, 380, 380);

  stroke(255); // white
  strokeWeight(6);
  fill(82, 139, 204); // blue
  arc(0, 0, 350, 350, PI, 0, PIE);
  fill(200, 32, 36); // red
  arc(0, 0, 350, 350, 0, PI, PIE);
  noStroke();

  noFill();
  stroke(255); // white
  strokeWeight(4);
  ellipse(0, 0, 350, 350);
  noStroke();

  fill(255); // white
  textAlign(CENTER, CENTER);
  textSize(80);
  textFont('Arial');
  text('CAS', 0, -60);

  let barW = 60, barH = 12, barGap = 16;
  fill(255); // white
  for (let i = 0; i < 3; i++) {
    rect(-70, 40 + i * (barH + barGap), barW, barH, 3);
  }

  push();
  translate(70, 70);
  rotate(radians(-18));
  fill(0, 160, 70); // green
  stroke(0, 120, 40); // dark green
  strokeWeight(2);
  star(0, 0, 20, 45, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
