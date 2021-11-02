//car class
    class Car {
        constructor(color, convertible) {
            this.color = color;
            this.convertible = convertible;
            this.speed = 0;
        }
        accelerate(x) {
            this.speed = 0 + x
            return this.speed
         }
         decelerate(x) {
             this.speed = this.speed - x
             return this.speed
         }
    }
// // //car example
const car1 = new Car("red", true)

// // //test accelerate and decelerate functions
console.log("Car1 is accelerating by " + car1.accelerate(25))


module.exports = Car


