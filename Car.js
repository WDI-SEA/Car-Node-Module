class Car {
    constructor(color, convertible) {
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }
    accelerate (speedometerNum) {
        this.speed = this.speed + speedometerNum
    }
    decelerate (speedometerNum) {
        this.speed = this.speed - speedometerNum
    }
}

module.exports = Car