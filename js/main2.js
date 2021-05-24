let x
let y
let centerX
let centerY
let distX
let distY
let radius
let circle
let r = 35
let i = 0

let planet1
let name

class planet {
  constructor(x, y, name) {
    this.x = x
    this.y = y
    this.name = name
  }

  display() {
    stroke(0)
    fill(255, 204, 0)
    ellipse(this.x, this.y, r)
  }
  drawLineFromCenter() {
    stroke(255)
    line(this.x, this.y, centerX, centerY)
  }
  orbit() {
    i = i + 1
    let dx = sin(i)*50
    let dy = cos(i)*50

    this.x = this.x + dx
    this.y = this.y + dy
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight)
  centerX = width/2
  centerY = height/2

  background(0)

  createPlanet()
  planet1.display()
  planet1.drawLineFromCenter()
  orbit()
}


function draw() {
  background(0)
  // planet1.orbit()
  planet1.display()
  planet1.drawLineFromCenter()
  // every frame, move the circle dx and dy,
  // where dx
}

function createPlanet() {
  x = random(5*r, width - (5*r))
  y = random(5*r, height - (5*r))
  let names = ["Mars", "Jupiter", "Earth", "Pluto"]
  name = names[round(random(0,3))]
  planet1 = new planet (x, y, name)
}

function orbit() {
  stroke(255)
  noFill()
  ellipse(centerX, centerY, radius*2)
}

function distance() {
  distX = x - centerX < 0 ? - (x - centerX) : x - centerX
  distY = y - centerY < 0 ? - (y - centerY) : y - centerY
  radius = sqrt((distX * distX) + (distY * distY))
  return `distX is ${distX}, distY is ${distY}, radius is ${radius}`

  // want sqrt of distX^2 + distY^2
}
