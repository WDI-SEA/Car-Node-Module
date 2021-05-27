module.exports = class Car {
    constructor(color,convertible){
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }
    accelerate(val){
        this.speed += val
    }
    decelerate(val){
        this.speed -= val
    }
}
