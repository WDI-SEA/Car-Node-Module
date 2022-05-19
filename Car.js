let speed = 0
class Car {
    constructor(color, convertible, speed){
        this.color = color;
        this.convertible = convertible;
        this.speed = speed
    }
    accelerate = (accel) => {
        this.speed += accel
    decelerate = (decel) => {
        this.speed -= decel
    }
}
}
module.exports = Car