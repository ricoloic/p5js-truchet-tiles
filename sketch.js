const scl = 50;
const weight = 10;

let cols, rows;

function setup() {
  const canvas = document.querySelector('canvas');
  if (canvas) canvas.remove();
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
  noStroke();

  cols = floor(width / scl) - 1;
  rows = floor(height / scl) - 1;
  availableWidth = width - cols * scl;
  availableHeight = height - rows * scl;

  translate(scl / 2 + availableWidth / 2, scl / 2 + availableHeight / 2);

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      tile(col, row);
    }
  }
}

function tile(col, row) {
  const x = col * scl;
  const y = row * scl;
  //fill(random(255), random(255), random(255));
  //square(x, y, scl);

  let time = 0;
  if (col % 2 === 0 && row % 2 === 0) {
    time = 3;
  } else if (col % 2 === 0 && row % 2 !== 0) {
    time = 1;
  } else if (row % 2 === 0) {
    time = 2;
  }

  fill(0);
  push();
  translate(x, y);
  rotate(HALF_PI * floor(random(4)));
  //stroke(0);
  //strokeWeight(weight);
  //noFill();
  //rect(0, 0, scl, scl);
  //arc(-scl / 2, -scl / 2, scl, scl, 0, HALF_PI);
  //arc(scl - scl / 2, scl - scl / 2, scl, scl, PI, PI + HALF_PI);
  triangle(-scl / 2, -scl / 2, scl - scl / 2, scl - scl / 2, -scl / 2, scl - scl / 2);
  pop();
}

function draw() {}

function keyPressed() {
  if (keyCode === 32) {
    saveCanvas("print.png");
  }
}
