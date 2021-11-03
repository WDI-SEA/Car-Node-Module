class Car {
    constructor(color, convertible) {
        this.color = color
        this.convertible = convertible
        this.speed = 0 
    }

    accelerate(velocity) {
        this.speed += velocity
    }

    decelerate(velocity) {
        this.speed -= velocity
    }
}

module.exports = Car