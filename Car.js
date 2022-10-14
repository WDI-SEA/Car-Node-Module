class Car {
    constructor(color, convertible, speed = 0) {
        this.color = color,
        this.convertible = convertible,
        this.speed = speed
    }
  
    accelerate(speedValue) {
      this.speed = this.speed + speedValue
    }
    decelerate(speedValue) {
      this.speed = this.speed - speedValue
    }
  
  }

module.exports = Car;

//   const car1 = new Car("blue", 1)
//   car1.accelerate(50)
//   console.log(car1)
//   car1.decelerate(20)
//   console.log(car1)