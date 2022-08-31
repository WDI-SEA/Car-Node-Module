module.exports = class Car {
    constructor(color, convertible) {
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }
    accelerate(ammount) {
        this.speed += ammount
    }

    decelerate(ammount) {
        this.speed -= ammount
    }
}