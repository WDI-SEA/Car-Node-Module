class Car {

    constructor(color, convertible){
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }

    accelerate(n){
        this.speed = this.speed + n
    }

    decelerate(n){
        this.speed = this.speed - n
    }
}

module.exports =  Car

// const audi = new Car('black', false)
// audi.accelerate(10)
// console.log(audi.color)
