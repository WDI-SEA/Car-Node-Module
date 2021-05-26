const log = console.log


class Car {

    // shared by all class instances
    static speed = 0
    

    constructor(color, convertible){
        this.color = color
        this.convertible = convertible
        this.speed = Car.speed
    }
    
    accelerate(num){
        Car.speed += num
        this.speed += num
        log(`The car is now traveleing at ${Car.speed}MPH`)
        
    }
    decelerate(num){
        Car.speed -= num
        this.speed -= num
        log(`The car is now traveleing at ${Car.speed}MPH`)
    }
    status(){
        log(`The car is moving at ${Car.speed}MPH`)
    }
    
}

module.exports = Car

// const machFive = new Car('red', true)
// machFive.accelerate(20)
// machFive.status()
// log(machFive.speed)