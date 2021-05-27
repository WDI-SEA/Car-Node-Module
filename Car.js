

// VARIABLES
    // Car class
        // color
        // convertible
        // current speed -- starts at 0
        // speed increment -- argument for increase or decrease
class Car {
    constructor(color, convertible, increment) {
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }

    // FUNCTIONS
        // accelerate
        // decelerate
    accelerate(increment) {
        this.speed += increment
    }
    
    decelerate(increment) {
        this.speed -= increment
    }
}

// // class constructor test
// let tesla = new Car('green', true, 50)
// console.log(tesla)

module.exports = Car

// OBJECTIVES
    // pass test