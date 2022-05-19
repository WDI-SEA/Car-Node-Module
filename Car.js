class Car {
    constructor (color, convertable = true, speed = 0){
        this.color = color
        this.convertable = convertable
        this.speed = speed
    }
    accelerate (num){
        speed += num
    }
    decelerate(num){
        speed -= num
    }
}
module.exports = Car
