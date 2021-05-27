class Car {
    constructor(color, convertible) {
        this.color = color;
        this.convertible = convertible;
        this.speed = 0;
    }    

accelerate(mph) {
    this.speed += mph 
}

decelerate(mph) {
    this.speed -= mph
}
}
const escape = new Car("silver", false)
console.log("ESCAPE COLOR: " + escape.color)
console.log("ESCAPE CONVERTIBLE: " + escape.convertible)
console.log("ESCAPE SPEED: " + escape.speed)
escape.accelerate(25)
escape.decelerate(10)
console.log("SPEED AFTER ACCELERATE: " + escape.speed)
console.log("SPEED AFTER DECELERATE: " + escape.speed)


module.exports = Car
