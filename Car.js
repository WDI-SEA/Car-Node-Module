
class Car {
    constructor(color, convertible){
        this.color = color;
        this.convertible = convertible;
        this.speed = 0
    }

    accelerate(amount){
        this.speed += amount;
    }
    
    decelerate(amount){
        this.speed -= amount;
    }

}

module.exports = Car