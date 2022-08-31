class Car {
    constructor(color, convertible) {
        this.color = color;
        this.convertible = convertible;
        this.speed = 0;
    }
    accelerate(speedAcc) {
        this.speed += speedAcc
    }
    decelerate(speedAcc) {
        this.speed -= speedAcc
    }
}

module.exports = Car