//
//

class Car {
  //   static speed = 0

  constructor(color, convertible, speed = 0) {
    this.color = color
    this.convertible = convertible
    this.speed = speed
  }
  accelerate(acc) {
    this.speed = this.speed + acc
  }
  decelerate(dec) {
    this.speed = this.speed - dec
  }
}

// const newCar = new Car('yellow', true)
// console.log('color: ' + newCar.color)
// console.log('convertible: ' + newCar.convertible)
// console.log('speed: ' + newCar.speed)
// newCar.accelerate(100)
// console.log('acc: ' + newCar.speed)
// newCar.decelerate(25)
// console.log('dec: ' + newCar.speed)

module.exports = Car
