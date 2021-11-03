
module.exports = class Car {
    constructor(color,convertible) {
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }
    accelerate(speed) {
        return this.speed += speed
    }  
    decelerate(slow) {
        return this.speed -= slow
    }
}
