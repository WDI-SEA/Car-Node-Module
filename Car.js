class Car {
    constructor(color, convertible) {
        this.color = color;
        this.convertible = convertible;
        this.speed = 0;
    }

    accelerate(numAcc) {
        this.speed = this.speed + numAcc
    }

    decelerate(numDec) {
        this.speed = this.speed - numDec
        }

    }

module.exports = Car



