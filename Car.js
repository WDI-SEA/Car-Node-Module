class Car {
    constructor(color, convertible) {
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }
    
    accelerate(number) {
        speed += number
    }

    decelerate(number) {
        speed -= number
    }
}

module.exports = Car;