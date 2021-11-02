module.exports = class Car {
    constructor(color, convertable, speed, accelerate, decelerate) {
        this.color = color,
        this.convertible = convertable,
        this.speed = 0
    }
    accelerate = (num) => {
        this.speed += num
    }
    decelerate = (num) => {
        this.speed -= num
    }
}
