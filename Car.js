
//Make a module (Car.js) that defines a Car class.
//This class will have both properties and methods (functions)
//It will be exported as a module.


//specify the following properties when constructing new cars:
// color (string)
// convertible (boolean)
module.exports = class Car { 
    constructor(color, convertible) {
    this.color = color
    this.convertible = convertible
    this.speed = 0
    //These should take one argument, a number, which is added or subtracted from the current speed
    this.accelerate = function(speedChange) {
        this.speed += speedChange
        }
    this.decelerate = function(speedChange) {
        this.speed -= speedChange
        }
    }
} 


//  It will be exported as a module.


