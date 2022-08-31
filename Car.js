class Car {
    constructor(color, convertible) {
        this.color = color
        this.convertible = convertible
        this.speed = 0
        this.accelerate = function (newSpeed) {
          this.speed = newSpeed
        }
      this.decelerate = function (newerSpeed) {
        this.speed = this.speed - newerSpeed
      }
    }
    getCarStats() {
        return `
          Color: ${this.color}
          Convertible: ${this.convertible}
          Speed: ${this.speed}
          Acceleration: ${this.accelerate}
          Deceleration: ${this.decelerate}
        `;
      }
}

// const chevy = new Car(red, true)
// console.log(chevy)

module.exports = Car;