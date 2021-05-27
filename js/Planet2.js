class Planet {
  constructor(i, r) {
    this.x = 0
    this.y = 0
    this.s = 35
    this.fill = [235, random(120, 255), random(50, 255)]
    fill(240, Math.random()*255 + 120, Math.random()*255)
    // i is the actual *position* along the orbit
    this.i = i
    this.speed = random(0.01, 0.02)
    //radius of the ORBIT
    this.r = 50 + r

    //ox determines the origin point of the orbit
    this.ox = width/5 + 20*i
    this.oy = height/2 + 1.5*i
  }

//normally called update in convention
  orbit () {
    //this.i += determines how fast it moves along the orbit
    this.i += this.speed
    this.x = sin(this.i) * this.r + this.ox
    this.y = cos(this.i) * this.r + this.oy
  }

//conventional name is draw
  display () {
    stroke(0)
    fill(this.fill[0], this.fill[1], this.fill[2])
    ellipse(this.x, this.y, this.s)
  }
}
