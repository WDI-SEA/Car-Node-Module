
class Car {
    constructor(color, convertible){
        this.color = color;
        this.convertible = convertible;
        this.speed = 0
    }
    accelerate = (accel) => {
        return this.speed += accel
    }
    decelerate = (decel) => {
        return this.speed -= decel
    }
}

module.exports = Car
