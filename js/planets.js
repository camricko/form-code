let planets = []
let planetSize = 35
let planetMargin = 0 //the margin (i.e. space) between each planet's orbital radius

function setup() {
  createCanvas(innerWidth, innerHeight)
  maxRadius = height / 3.5
  maxPlanets = Math.floor(maxRadius/35) //should be maxRadius / this.s

  for (let i = 0; i < maxPlanets; i++) {
    const startPos = random(0, 20)
    const radius = 35 * i + planetMargin
    const p =  new Planet(startPos, radius)
    planets.push(p)
    planetMargin += random(5, 25) // for fun: swap with randomGaussian(15, 7)
  }
}

function draw () {
  background(0)

  planets.forEach((planet) => {
    planet.orbit()
    planet.display()
  } )
}
