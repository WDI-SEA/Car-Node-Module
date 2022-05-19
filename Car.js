class Car {
    constructor(color, convertible){
        this.color = color;
        this.convertible = convertible;
        this.speed = 0;
    }
    accelerate(num){
        this.speed += num
        return this.speed
    }
    decelerate(num){
        this.speed -= num
        return this.speed
    }
}

module.exports = Car

