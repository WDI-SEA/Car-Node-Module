module.exports = class Car{

    constructor (color, convertible) { 
        this.convertible = convertible
        this.color = color
        this.speed = 0
    }

    accelerate(rate){
        this.speed += rate
    }

    decelerate(rate){
        this.speed -= rate
    }

    

}