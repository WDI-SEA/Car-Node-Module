class Car  {
    constructor(color, convertible) {
        this.speed = 0
        this.color = color
        this.convertible = convertible
    }
    
    accelerate(speed) {
        this.speed += speed
    }
    decelerate(speed) {
        this.speed -= speed
    }

}

module.exports = Car