class Car {
    constructor(color, convertible, speed) {
      this.color = color;
      this.convertible = convertible;
      this.speed = 0;
    }
  
    accelerate(num) {
      this.speed += num;
    }
  
    decelerate(num) {
      this.speed -= num;
    }
  }
  
  module.exports = Car;
  
  // let car1 = new Car("green", true, "0");