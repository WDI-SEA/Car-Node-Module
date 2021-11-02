class Car {
  constructor(color, convertible) {
    this.color = color
    this.convertible = convertible
    this.speed = 0
  }

  accelerate(n) {
    return (this.speed += n)
  }

  decelerate(n) {
    return (this.speed -= n)
  }
}

module.exports = Car
