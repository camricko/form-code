let x;
let y;
let r;

let minX;
let minY;
let maxX;
let maxY;

let myNum = 1;

let circles = [];

class circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(20, 50)
    fill(240, Math.random()*255 + 120, Math.random()*255)
    ellipse(this.x, this.y, this.r);

    this.dist = dist(width/2, height/2, this.x, this.y);
  }

  display() {

  }
}

function placement(axis) {
  x = random(minX, maxX)
  y = random(minY, maxY)

  if (x < width/2) {minX = x; maxX = width - r}
    else {minX = r; maxX = width/2}
  if (y < height/2) {minY = y; maxY = height - r}
    else {minY = r; maxY = height/2}
}

function overlap(object1, object2) {
  let distance = dist(object1.x, object1.y, object2.x, object2.y);
  if (distance < r + 5) {
    return true
  } else { return false }
} //not currently in use

function setup() {
  createCanvas(innerWidth, innerHeight)
  background(0)

  r = random(20, 50)
  minX = r
  minY = r
  maxX = width - r
  maxY = height - r
}


function draw() {
  background(0, 0, 0, 15)
  for (i = 0; i < 10; i++) {
    placement()
    circles[i] = new circle(x, y)
  }
  for (let i = 0; i < circles.length; i++) {
    stroke(220, Math.random()*255 + 100, Math.random()*255)
      line(circles[i].x, circles[i].y, circles[Math.random()*circles.length].x, circles[Math.floor(Math.random()*circles.length)].y)
  }
}
