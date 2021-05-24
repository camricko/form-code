let planets = []

function setup() {
  createCanvas(innerWidth, innerHeight)
  for (let i = 0; i < 3; i++) {
    const r = random(0, 100)
    const p =  new Planet(r)
    planets.push(p)
  }
}

function draw () {
  background(0)
  // for (let i = 0; i < planets.length; i++) {
  //   planets[i].orbit()
  //   planets[i].display()
  // }

  planets.forEach((planet) => {
    planet.orbit()
    planet.display()
  } )
}
