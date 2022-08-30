class Car {
  constructor(color, convertible) {
    this.color = color
    this.convertible = convertible
    this.speed = 0
  }

  accelerate(newSpeed) {
    this.speed += newSpeed
  }

  decelerate(newSpeed) {
    this.speed -= newSpeed
  }
}

module.exports = Car