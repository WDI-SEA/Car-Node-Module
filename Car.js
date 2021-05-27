class Car {
    constructor(color, convertible) {
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }
    accelerate(input){
    this.speed += input
   }
    decelerate(input){
    this.speed -= input
   }
}

module.exports = Car

