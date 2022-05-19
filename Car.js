
class Car {
    constructor(color, convertible, accelerate) {
        this.color = color
        this.convertible = convertible
        this.speed = 0
        
    }
    accelerate = (acc) => {
        this.speed += acc
    }
    decelerate = (dec) => {
        this.speed -= dec
    }
}


module.exports = Car;