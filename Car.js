module.exports = class {
    constructor(color, convertible) {
        this.color = color,
        this.convertible = convertible
        this.speed =0
    }


accelerate(a){
    this.speed = this.speed + a

}

decelerate(d){
 this.speed = this.speed - d
}

}
