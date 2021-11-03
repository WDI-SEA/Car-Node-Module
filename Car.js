class Car {
    constructor(color, convertible) {
        this.color = color
        this.convertible = convertible
        this.speed = 0
        this.accelerate = (int) =>{
            this.speed += (int)
        } 
        this.decelerate =(int) => {
            this.speed -= (int)
        } 
    }
}
module.exports = Car