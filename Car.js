class Car {
    constructor(color, convertible) {
        this.color = color
        this.covertible = convertible
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

module.exports = Car;