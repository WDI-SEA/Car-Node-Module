module.exports = class Car {
    constructor(color, convertible){
        this.color = color
        this.convertible = convertible
        this.speed = 0 
    }
    accelerate(value){
        this.speed=this.speed+value
    }
     decelerate(value){
        this.speed=this.speed-value


    }
}