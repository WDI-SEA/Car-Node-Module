class Car {
    constructor(color, convertible, accelerate, decelerate) {
        this.color = color
        this.convertible = convertible
        this.speed = 0

        this.accelerate = function (number) {
            this.speed += number
        }
        this.decelerate = function (number) {
            this.speed -= number
       }
    }
}

module.exports = Car