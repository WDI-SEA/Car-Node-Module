module.exports = class{
    constructor(color, convertible){
        this.color = color
        this.convertible = convertible 
        this.speed = 0
    }
    accelerate(carSpeed){
        this.speed = this.speed+carSpeed
    }
    decelerate(carSpeed){
        this.speed = this.speed-carSpeed
    }
}