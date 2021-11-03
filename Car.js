module.exports = function Class (color, convertible) {
    this. color = color
    this.convertible = convertible
    this.speed = 0
    
    this.accelerate = (num) => {
        this.speed = this.speed + num
    }

    this.decelerate = (num) => {
        this.speed = this.speed - num
    }
}