module.exports =
class Car {
    constructor(color, convertable) {
    this.color = color
    this.convertable = convertable
    this.speed = 0
}
    accelerate(x){
    this.speed += x
}
    decelerate(x){
    this.speed -= x
}
}
