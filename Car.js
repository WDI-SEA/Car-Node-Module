// build constructor for Car which defines color, convertible, and speed
class Car {
    constructor(color, convertible) {
        this.color = color,
        this.convertible = convertible,
        this.speed = 0
    }
    // accelerate function
    accelerate(num) {
        this.speed = this.speed + num
    }
    // decelerate function
    decelerate(num) {
        if(this.speed >= 0)
        this.speed = this.speed - num
    }
}
// export constructor class 
module.exports = Car