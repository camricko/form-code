class Planet {
  constructor(i) {
    this.x = 0
    this.y = 0
    this.s = 35
    // i is the actual *position* along the orbit
    this.i = i
    this.speed = random(0.01, 0.08)
    //radius of the ORBIT
    this.r = 50 + random(0, height/3)

    //ox determines the origin point of the orbit
    this.ox = width/2
    this.oy = height/2
  }

//normally called update in convention
  orbit () {
    //this.i += determines how fast it moves along the orbit
    this.i += this.speed
    this.x = sin(this.i)  * this.r + this.ox
    this.y = cos(this.i) * this.r + this.oy
  }


//conventional name is draw
  display () {
    stroke(0)
    fill(255, 204, 0)
    ellipse(this.x, this.y, this.s)
  }
}
