let move = 0;
function setup() {
  createCanvas(1300, 600);background(0);
}

function draw() {
  let c = {
  r : 0,
    g : 0,
    b : 0
  };
  c.r=random(0,255);
  c.g=random(0,255);
   c.b=random(0,255);
  fill(c.r,c.g,c.b);
  noStroke();
   move = move + 1;
  ellipse(move,move,move,move);
}