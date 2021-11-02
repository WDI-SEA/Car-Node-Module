
// Class that defines a car class 
class Car {
    constructor(color, convertible) {
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }

    accelerate(num) {
        this.speed = this.speed + num;
    }

    decelerate(num) {
        this.speed = this.speed - num;
    }
    

}

module.exports = Car
