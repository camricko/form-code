let x
let y
let centerX
let centerY
let distX
let distY
let radius
let circle
// let r = 35
// let i = 0

let planet1
let name

class Planet {
  constructor(o, name) {
    this.x = 0
    this.y = 0
    //tell it to orbit around center
    this.ox = width/2 //x origin
    this.ox = height/2 //y origin
    //size of the orbit
    this.r = width < height ? width / o : height / o // orbit relative to  page
    //starting position along orbit
    this.i = random(-1, 1) //i is both a rate of change and the position in the orbit
    this.s = 35
    this.name = name
  }

  display() {
    stroke(0)
    fill(255, 204, 0)
    ellipse(this.x, this.y, this.s)
  }
  drawLineFromCenter() {
    stroke(255)
    line(this.x, this.y, centerX, centerY)
  }
  orbit() {
    this.i += 0.1
    this.x += sin(this.i) * this.r + this.ox
    this.y += cos(this.i) * this.r + this.oy
    console.log(sin(this.i))
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight)
  centerX = width/2
  centerY = height/2

  background(0)
  createPlanet()

}


function draw() {
  background(0)
  planet1.orbit()
  planet1.display()
  planet1.drawLineFromCenter()
}

function createPlanet() {
  // x = random(5*r, width - (5*r))
  // y = random(5*r, height - (5*r))
  let names = ["Mars", "Jupiter", "Earth", "Pluto"]
  name = names[round(random(0,3))]
  const o = 4
  planet1 = new Planet (o, name)
}

// function orbit() {
//   stroke(255)
//   noFill()
//   ellipse(centerX, centerY, radius*2)
// }

// function distance() {
//   distX = x - centerX < 0 ? - (x - centerX) : x - centerX
//   distY = y - centerY < 0 ? - (y - centerY) : y - centerY
//   radius = sqrt((distX * distX) + (distY * distY))
//   return `distX is ${distX}, distY is ${distY}, radius is ${radius}`
// }
