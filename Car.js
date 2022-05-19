class Car {
    constructor(color, convertible) {
        this.color = color;
        this.convertible = convertible;
        this.speed = 0;
        }

        accelerate(acc) {
            this.speed = this.speed + acc
        }

        decelerate(dec) {
            this.speed = this.speed - dec
        }    
}




module.exports = Car