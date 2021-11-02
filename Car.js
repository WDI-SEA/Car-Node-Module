class Car {
  constructor(color, convertible) {
    this.color = color;
    this.convertible = convertible;
    this.speed = 0;
  }

  accelerate(number) {
    return (this.speed += number);
  }

  decelerate(number) {
    return (this.speed -= number);
  }
}

module.exports = Car;
