class Car {
    constructor(color, convertable) {
        this.color = "color"
        this.covertable = true || false
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
          Convertable: ${this.convertable}
          Speed: ${this.email}
          Acceleration: ${this.accelerate}
          Deceleration: ${this.decelerate}
        `;
      }
}

module.exports = Car;