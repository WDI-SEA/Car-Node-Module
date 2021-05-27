
class Car {
  // static speed = 0
  constructor(color, convertible) { 
    this.color = color
    this.convertible = convertible
    this.speed = 0
  }
    accelerate(num) {
      this.speed += num
    }
    decelerate(num) {
      this.speed -= num
    }

}

module.exports = Car
