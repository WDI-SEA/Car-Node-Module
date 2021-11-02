//car class
class Car {
    constructor(color, convertible, speed) {
        this.color = color;
        this.convertible = convertible;
        this.speed = 0;
     }
     accelerate(x) {
        return this.speed + x
     }
     decelerate(y) {
         return this.speed - y
     }
}
//car example
const car1 = new Car("red", "yes")
console.log("this is Car1", car1)

//test accelerate and decelerate functions
console.log("Car1 is accelerating by " + car1.accelerate(5))
console.log("Car1 is decelerating by " + car1.decelerate(5))
