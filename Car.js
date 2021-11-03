class Car {
    constructor(color, convertible) {
        // variables for inputs
        this.color = color
        this.convertible = convertible

        // default variable
        this.speed = 0

        // two functions that take a single argument and add or subtract it from the current speed
        this.accelerate = (change) => {
            this.speed += change
        }

        this.decelerate = (change) => {
            this.speed -= change
        }
    }
}

// export module so it can be used
module.exports  = Car