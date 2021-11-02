class Car {
    constructor(color, convertible) {
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }
    accelerate(num) {
        return (this.speed += num)
    }
    decelerate(num) {
        return (this.speed -= num)
    }
}
module.exports = Car