class Car {
  constructor(color, convertible){
    this.speed = 0
    this.color = color
    this.convertible = convertible
  }

  accelerate = function(deltaV){
    this.speed += deltaV
  }
  decelerate = function(deltaV){
    this.speed -= deltaV
  }
}

//Export Car class
module.exports = Car