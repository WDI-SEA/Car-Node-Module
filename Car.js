class Car {
    constructor(color, isConvertible,) {
        this.color = color
        this.convertible = isConvertible
        this.speed=0
    }
    accelerate(speed) {
        this.speed+= Number;
    }
    decelerate(speed) {
        this.speed-= Number;
    }
}

module.exports = Car;