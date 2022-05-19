class Car {
    constructor(color, isConvertible,) {
        this.color = color
        this.convertible = isConvertible
        this.speed=0
    }
    accelerate(speed) {
        this.speed+= speed
    }
    decelerate(speed) {
        this.speed-= speed 
    }
}

module.exports = Car