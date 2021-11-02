module.exports = class Car {
    constructor(color, convertible) {
        this.color = color,
        this.convertible = convertible,
        this.speed = 0
    }

    accelerate(plus) {
        return this.speed += plus;
    }

    decelerate(minus) {
        return this.speed -= minus;
    }
}

